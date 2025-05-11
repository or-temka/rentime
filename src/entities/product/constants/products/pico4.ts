import { Product } from '../../types'
import { getProductImageRoute } from '../../utils'

export const PICO4_ID: Product['id'] = 'pico4'

export const PICO4: Product = {
  id: PICO4_ID,
  name: 'Pico 4',
  feedbackCount: 30,
  rating: 4,
  imagesURL: {
    thumbnail: getProductImageRoute(PICO4_ID, 'thumbnail'),
    full: getProductImageRoute(PICO4_ID, 'thumbnail'),
  },
  category: 'rest and leisure',
  description: 'Описание для pico 4',
}
