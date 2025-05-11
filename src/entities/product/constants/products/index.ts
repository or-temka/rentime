import { Product } from '../../types'
import { PICO4 } from './pico4'
import { PLAYSTATION5 } from './playstation5'

export const PRODUCTS: Record<Product['id'], Product> = {
  [PICO4.id]: PICO4,
  [PLAYSTATION5.id]: PLAYSTATION5,
}
