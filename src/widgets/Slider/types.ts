export interface SliderProps {
  visibleSlidesCount?: number
  scrollSlidesCount?: number
  slides: React.ReactNode[]
  fixedSlideWidth?: string | number
  classNames?: {
    sliderWrapper?: string
    dots?: string
    dot?: string
    embla?: string
    emblaContainer?: string
    emblaSlide?: string
    emblaPeek?: string
  }
}
