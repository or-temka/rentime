import { Product, ProductNames } from '../types'
import { PRODUCT_IMAGE_ROUTE } from './imagesRoute'

export const PRODUCTS: Product[] = [
  {
    name: ProductNames.PICO4,
    image: PRODUCT_IMAGE_ROUTE.pico4,
    rating: 4.3,
    category: 'rest and leisure',
  },
  {
    name: ProductNames.PLAYSTATION5,
    image: PRODUCT_IMAGE_ROUTE.playstation5,
    rating: 5,
  },
]
