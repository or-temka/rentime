import { ProductCategory } from '../../types'

export type ProductCardProps = {
  id: string
  imageURL: string
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
