import { Product } from '../../types'
import { CLEANBOT_TURBO } from './cleanbot-turbo'
import { CRUTCHES } from './crutches'
import { DISK_FOR_PS5 } from './disk-for-ps5'
import { DUALSENSE } from './dualsense'
import { KARCHER_SC4_DELUXE } from './karcher-sc4-deluxe'
import { LOGITECH_G29 } from './logitech-g29'
import { PICO4_ULTRA } from './pico4-ultra'
import { PLAYSTATION5 } from './playstation5'
import { KARCHER_PUZZI_8_1 } from './karcher-puzzi-8-1'

export const PRODUCTS: Record<Product['id'], Product> = {
  [PLAYSTATION5.id]: PLAYSTATION5,
  [PICO4_ULTRA.id]: PICO4_ULTRA,
  [DISK_FOR_PS5.id]: DISK_FOR_PS5,
  [DUALSENSE.id]: DUALSENSE,
  [LOGITECH_G29.id]: LOGITECH_G29,
  [CRUTCHES.id]: CRUTCHES,
  [CLEANBOT_TURBO.id]: CLEANBOT_TURBO,
  [KARCHER_SC4_DELUXE.id]: KARCHER_SC4_DELUXE,
  [KARCHER_PUZZI_8_1.id]: KARCHER_PUZZI_8_1,
}
