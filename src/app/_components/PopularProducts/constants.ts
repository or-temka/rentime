import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { PICO4 } from '@/entities/product/constants/products/pico4'
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

export const popularProducts: ProductCardProps[] = [PICO4, PLAYSTATION5]
