import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { LOGITECH_G29 } from '@/entities/product/constants/products/logitech-g29'
import { PICO4 } from '@/entities/product/constants/products/pico4'
import { PICO4_ULTRA } from '@/entities/product/constants/products/pico4-ultra'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'
import { SegmentedSelectOption } from '@/shared/components'

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
    value: 'tourism',
    label: productCattegoryMap['tourism'],
  },
]

export const popularProducts: ProductCardProps[] = [
  PLAYSTATION5,
  PICO4_ULTRA,
  LOGITECH_G29,
  PICO4,
]
