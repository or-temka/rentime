'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss' // подключим css отдельно

interface CarouselProps {
  images: string[]
  visibleSlides?: number
  slidesPerScroll?: number
  autoSlideInterval?: number
}

export const Carousel = ({
  images,
  visibleSlides = 4,
  slidesPerScroll = 1,
  autoSlideInterval = 3000,
}: CarouselProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mouseOver = useRef(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: visibleSlides + 0.4,
      spacing: 10,
    },
    move: slidesPerScroll,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created: () => {
      autoPlay()
    },
    updated: () => {
      autoPlay()
    },
    dragStart: () => {
      mouseOver.current = true
      clearAutoPlay()
    },
    dragEnd: () => {
      mouseOver.current = false
      autoPlay()
    },
  })

  const clearAutoPlay = () => {
    if (timeout.current) clearTimeout(timeout.current)
  }

  const autoPlay = () => {
    clearAutoPlay()
    if (mouseOver.current || !slider.current) return
    timeout.current = setTimeout(() => {
      slider.current?.next()
      autoPlay()
    }, autoSlideInterval)
  }

  useEffect(() => {
    const node = sliderRef.current
    if (!node) return

    const onMouseEnter = () => {
      mouseOver.current = true
      clearAutoPlay()
    }

    const onMouseLeave = () => {
      mouseOver.current = false
      autoPlay()
    }

    node.addEventListener('mouseenter', onMouseEnter)
    node.addEventListener('mouseleave', onMouseLeave)

    return () => {
      node.removeEventListener('mouseenter', onMouseEnter)
      node.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [slider])

  const slideCount = slider.current?.track.details.slides.length ?? 0

  return (
    <>
      <div
        ref={(ref) => {
          sliderRef.current = ref
          sliderInstanceRef(ref)
        }}
        className="keen-slider"
        style={{ overflow: 'hidden', paddingRight: '5%' }}
      >
        {images.map((src, i) => (
          <div className="keen-slider__slide" key={i}>
            <img
              src={src}
              alt={`img-${i}`}
              style={{
                width: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {/* Навигационные точки */}
      <div className={styles.dots}>
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`${styles.dot} ${
              i === currentSlide ? styles.active : ''
            }`}
          />
        ))}
      </div>
    </>
  )
}
