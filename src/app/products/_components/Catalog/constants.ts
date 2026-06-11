import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { SegmentedSelectOption } from '@/shared/components'
import { Sort } from './types'
import { PICO4 } from '@/entities/product/constants/products/pico4'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'
import { LOGITECH_G29 } from '@/entities/product/constants/products/logitech-g29'
import { DISK_FOR_PS5 } from '@/entities/product/constants/products/disk-for-ps5'
import { DUALSENSE } from '@/entities/product/constants/products/dualsense'
import { PICO4_ULTRA } from '@/entities/product/constants/products/pico4-ultra'
import { CRUTCHES } from '@/entities/product/constants/products/crutches'
import { CLEANBOT_TURBO } from '@/entities/product/constants/products/cleanbot-turbo'
import { DUALSENSE_EDGE } from '@/entities/product/constants/products/dualsense-edge'
import { KARCHER_SC4_DELUXE } from '@/entities/product/constants/products/karcher-sc4-deluxe'

export const sortMap: Record<Sort, string> = {
  no: 'по умолчанию',
  bottom: 'сначала дешевле',
  top: 'сначала дороже',
}

export const DEFAULT_CATEGORY_OPTION: SegmentedSelectOption = {
  label: 'Все',
  value: 'all',
}

export const productCategoriesOptions: SegmentedSelectOption[] = [
  {
    value: 'rest and leisure',
    label: productCattegoryMap['rest and leisure'],
  },
  {
    value: 'for home',
    label: productCattegoryMap['for home'],
  },
  {
    value: 'health',
    label: productCattegoryMap.health,
  },
  {
    value: 'tourism',
    label: productCattegoryMap['tourism'],
  },
]

export const products: ProductCardProps[] = [
  PLAYSTATION5,
  PICO4_ULTRA,
  PICO4,
  DISK_FOR_PS5,
  DUALSENSE_EDGE,
  DUALSENSE,
  LOGITECH_G29,
  CRUTCHES,
  CLEANBOT_TURBO,
  KARCHER_SC4_DELUXE
]
