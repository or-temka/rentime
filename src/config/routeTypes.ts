import { ProductCategory } from '@/entities/product'
import { QueryRecords } from '@/shared/utils'

export interface ProductsRouteQueryRecord extends QueryRecords {
  productCategory: ProductCategory
}
