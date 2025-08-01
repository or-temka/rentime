import { SliderProps } from '../Slider'

export type MediaCardItem = {
  imageUrl: string
  title?: string
}

export interface MediaCardSliderProps {
  classNames?: {
    slider?: SliderProps['classNames']
  }
  items: MediaCardItem[]
}
