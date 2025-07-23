import {
  PRODUCT_IMAGE_FULL_IMAGE_ROUTE,
  PRODUCT_IMAGE_ROOT_ROUTE,
  PRODUCT_IMAGE_THUMBNAIL_ROUTE,
} from '../constants'
import { Product } from '../types'

export const getProductImageRoute = (
  productName: Product['id'],
  type: 'thumbnail' | 'full',
  fileExtension: 'jpg' | 'png' = 'jpg'
) => {
  const imageName =
    type === 'thumbnail'
      ? PRODUCT_IMAGE_THUMBNAIL_ROUTE
      : PRODUCT_IMAGE_FULL_IMAGE_ROUTE
  return `${PRODUCT_IMAGE_ROOT_ROUTE}${productName}/${imageName}.${fileExtension}`
}
