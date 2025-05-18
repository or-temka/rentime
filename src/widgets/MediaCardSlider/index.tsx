import { Slider } from '../Slider'
import { MediaCardSlide } from './components'
import styles from './index.module.scss'
import { MediaCardSliderProps } from './types'

export const MediaCardSlider = ({
  classNames,
  items,
}: MediaCardSliderProps) => {
  const slides = items.map((item) => (
    <MediaCardSlide key={1} imageUrl={item.imageUrl} />
  ))

  return (
    <Slider
      visibleSlidesCount={5}
      scrollSlidesCount={3}
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
    />
  )
}

export type * from './types'
