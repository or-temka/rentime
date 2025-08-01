'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { SliderProps } from './types'

export const Slider = ({
  visibleSlidesCount = 4,
  scrollSlidesCount = 1,
  slides,
  classNames,
  fixedSlideWidth,
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

  const slideWidth = fixedSlideWidth
    ? typeof fixedSlideWidth === 'number'
      ? `${fixedSlideWidth}px`
      : fixedSlideWidth
    : `calc((100% - ${visibleSlidesCount - 1} * 16px) / ${visibleSlidesCount})`
  const peekSlideWidth = `calc(${slideWidth} * 0.5)`

  return (
    <div
      className={[styles.sliderWrapper, classNames?.sliderWrapper].join(' ')}
    >
      <div className={[styles.dots, classNames?.dots].join(' ')}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.dotActive : ''
            } ${classNames?.dot}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

      <div
        className={[styles.embla, classNames?.embla].join(' ')}
        ref={emblaRef}
      >
        <div
          className={[styles.embla__container, classNames?.emblaContainer].join(
            ' '
          )}
        >
          {slides.map((slide, i) => (
            <div
              className={[styles.embla__slide, classNames?.emblaSlide].join(
                ' '
              )}
              key={i}
              style={{
                flex: `0 0 ${slideWidth}`,
                marginRight: i === slides.length - 1 ? '0px' : '16px',
              }}
            >
              {slide}
            </div>
          ))}

          <div
            className={[styles.embla__peek, classNames?.emblaPeek].join(' ')}
            style={{ flex: `0 0 ${peekSlideWidth}` }}
          />
        </div>
      </div>
    </div>
  )
}

export type * from './types'
