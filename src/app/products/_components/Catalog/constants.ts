import { ProductCardProps, productCattegoryMap } from '@/entities/product'
import { SegmentedSelectOption } from '@/shared/components'
import { Sort } from './types'
import { PICO4 } from '@/entities/product/constants/products/pico4'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'
import { LOGITECH_G29 } from '@/entities/product/constants/products/logitech-g29'
import { DISK_FOR_PS5_4 } from '@/entities/product/constants/products/disk-for-ps5-4'

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

export const products: ProductCardProps[] = [PICO4, PLAYSTATION5, LOGITECH_G29, DISK_FOR_PS5_4]
