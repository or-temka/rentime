import { Slider } from '../Slider'
import { MediaCardSlide } from './components'
import styles from './index.module.scss'

const slides = [
  <MediaCardSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <MediaCardSlide key={1} imageUrlName="god-of-war.webp" />,
  <MediaCardSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <MediaCardSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
  <MediaCardSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <MediaCardSlide key={1} imageUrlName="god-of-war-ragnarok.jpg" />,
  <MediaCardSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <MediaCardSlide key={1} imageUrlName="god-of-war-ragnarok.jpg" />,
  <MediaCardSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <MediaCardSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
  <MediaCardSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <MediaCardSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
]

export const MediaCardSlider = () => {
  return (
    <Slider
      visibleSlidesCount={5}
      scrollSlidesCount={3}
      slides={slides}
      classNames={{
        emblaSlide: styles.slide,
        dots: styles.dots,
        emblaContainer: styles.emblaContainer,
        sliderWrapper: styles.sliderWrapper,
      }}
    />
  )
}
