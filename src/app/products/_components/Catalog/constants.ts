import {
  PRODUCT_IMAGE_ROUTE,
  ProductCardProps,
  productCattegoryMap,
} from '@/entities/product'
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

export const products: ProductCardProps[] = [
  {
    id: 'vrpico4',
    name: 'VR очки Pico 4',
    feedbackCount: 30,
    rating: 4,
    imageURL: `${PRODUCT_IMAGE_ROUTE.pico4}pico4screen1.jpg`,
    category: 'rest and leisure',
  },
  {
    id: 'playstation5',
    name: 'Play station 5',
    feedbackCount: 1050,
    rating: 5,
    imageURL: `${PRODUCT_IMAGE_ROUTE.playstation5}playstation5screen1.jpg`,
    category: 'rest and leisure',
  },
  {
    id: 'vroculusquest3s',
    name: 'VR-очки Oculus Quest 3S',
    feedbackCount: 2,
    rating: 2,
    imageURL: `${PRODUCT_IMAGE_ROUTE.pico4}pico4screen1.jpg`,
    category: 'rest and leisure',
  },
  {
    id: 'vroculusquest4s',
    name: 'VR-очки Oculus Quest 4S',
    feedbackCount: 2,
    rating: 2,
    imageURL: `${PRODUCT_IMAGE_ROUTE.pico4}pico4screen1.jpg`,
    category: 'tourism',
  },
]
