import { ProductCategory } from '@/entities/product'

export type Sort = 'no' | 'top' | 'bottom'

export interface CatalogProps {
  activeCategory: ProductCategory
}
