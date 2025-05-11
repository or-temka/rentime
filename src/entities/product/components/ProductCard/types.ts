import { Product, ProductCategory } from '../../types'

export type ProductCardProps = Product & {
  id: string
  name: string
  rating: number
  feedbackCount: number
  category?: ProductCategory
  classNames?: {
    container?: string
    content?: string
  }
  minPrice?: number
  maxPrice?: number
}
