import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { SegmentedSelectOption } from '@/shared/components'
import { Sort } from './types'
import { PICO4 } from '@/entities/product/constants/products/pico4'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'

export const sortMap: Record<Sort, string> = {
  no: 'по умолчанию',
  bottom: 'сначала дешевле',
  top: 'сначала дороже',
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
    value: 'tourism',
    label: productCattegoryMap['tourism'],
  },
]

export const products: ProductCardProps[] = [PICO4, PLAYSTATION5]
