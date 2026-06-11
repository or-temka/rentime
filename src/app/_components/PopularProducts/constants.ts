import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { LOGITECH_G29 } from '@/entities/product/constants/products/logitech-g29'
import { PICO4 } from '@/entities/product/constants/products/pico4'
import { PICO4_ULTRA } from '@/entities/product/constants/products/pico4-ultra'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'
import { SegmentedSelectOption } from '@/shared/components'
import { CRUTCHES } from '@/entities/product/constants/products/crutches'
import { CLEANBOT_TURBO } from '@/entities/product/constants/products/cleanbot-turbo'
import { DUALSENSE_EDGE } from '@/entities/product/constants/products/dualsense-edge'

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

export const popularProducts: ProductCardProps[] = [
  PLAYSTATION5,
  PICO4_ULTRA,
  LOGITECH_G29,
  DUALSENSE_EDGE,
  PICO4,
  CRUTCHES,
  CLEANBOT_TURBO,
]
