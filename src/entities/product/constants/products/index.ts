import { Product } from '../../types'
import { LOGITECH_G29 } from './logitech-g29'
import { PICO4 } from './pico4'
import { PLAYSTATION5 } from './playstation5'

export const PRODUCTS: Record<Product['id'], Product> = {
  [PICO4.id]: PICO4,
  [PLAYSTATION5.id]: PLAYSTATION5,
  [LOGITECH_G29.id]: LOGITECH_G29
}
