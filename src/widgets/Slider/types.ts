export interface SliderProps {
  visibleSlidesCount?: number
  scrollSlidesCount?: number
  slides: React.ReactNode[]
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
