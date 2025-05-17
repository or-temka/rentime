'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.scss'

interface SliderProps {
  visibleSlidesCount?: number // сколько видно
  scrollSlidesCount?: number // сколько листается
}

export const Slider = ({
  visibleSlidesCount = 4,
  scrollSlidesCount = 1,
}: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: scrollSlidesCount,
    containScroll: 'trimSnaps',
    align: 'start',
  })

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const slideWidth = `calc((100% - ${
    visibleSlidesCount - 1
  } * 16px) / ${visibleSlidesCount})`
  const peekSlideWidth = `calc(${slideWidth} * 0.5)`

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.dotActive : ''
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              className={styles.embla__slide}
              key={i}
              style={{
                flex: `0 0 ${slideWidth}`,
                marginRight: i === 11 ? '0px' : '16px',
              }}
            >
              Slide {i + 1}
            </div>
          ))}

          <div
            className={styles.embla__peek}
            style={{
              flex: `0 0 ${peekSlideWidth}`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
