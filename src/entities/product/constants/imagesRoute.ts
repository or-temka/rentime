import { IMAGE_ROOT_ROUTE } from '@/shared/constants'
import { ProductNames } from '../types'

export const PRODUCT_IMAGE_ROOT_ROUTE = IMAGE_ROOT_ROUTE + 'products/'

export const PRODUCT_IMAGE_ROUTE: Record<ProductNames, string> = {
  pico4: PRODUCT_IMAGE_ROOT_ROUTE + 'pico4/',
  playstation5: PRODUCT_IMAGE_ROOT_ROUTE + 'playstation5/',
}
