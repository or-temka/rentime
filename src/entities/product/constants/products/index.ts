import { Product } from '../../types'
import { DISK_FOR_PS5 } from './disk-for-ps5'
import { DUALSENSE } from './dualsense'
import { LOGITECH_G29 } from './logitech-g29'
import { PICO4 } from './pico4'
import { PICO4_ULTRA } from './pico4-ultra'
import { PLAYSTATION5 } from './playstation5'

export const PRODUCTS: Record<Product['id'], Product> = {
  [PLAYSTATION5.id]: PLAYSTATION5,
  [PICO4.id]: PICO4,
  [PICO4_ULTRA.id]: PICO4_ULTRA,
  [DISK_FOR_PS5.id]: DISK_FOR_PS5,
  [DUALSENSE.id]: DUALSENSE,
  [LOGITECH_G29.id]: LOGITECH_G29,
}
