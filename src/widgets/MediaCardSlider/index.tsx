'use client'

import { useWindowWidth } from '@/shared/hooks'
import { Slider } from '../Slider'
import { MediaCardSlide } from './components'
import styles from './index.module.scss'
import { MediaCardSliderProps } from './types'

export const MediaCardSlider = ({
  classNames,
  items,
}: MediaCardSliderProps) => {
  const width = useWindowWidth()

  const scrollSlidesCount = (() => {
    if (width < 550) return 1
    if (width < 1200) return 2
    return 3
  })()
  const slideWidth = (() => {
    if (width < 800) return 208
    return 309
  })()

  const slides = items.map((item) => <MediaCardSlide key={1} item={item} />)

  return (
    <Slider
      visibleSlidesCount={5}
      scrollSlidesCount={scrollSlidesCount}
      slides={slides}
      classNames={{
        ...classNames?.slider,
        emblaSlide: [styles.slide, classNames?.slider?.emblaSlide].join(' '),
        dots: [styles.dots, classNames?.slider?.dots].join(' '),
        emblaContainer: [
          styles.emblaContainer,
          classNames?.slider?.emblaContainer,
        ].join(' '),
        sliderWrapper: [
          styles.sliderWrapper,
          classNames?.slider?.sliderWrapper,
        ].join(' '),
      }}
      fixedSlideWidth={slideWidth}
    />
  )
}

export type * from './types'
