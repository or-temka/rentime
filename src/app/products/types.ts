import { ProductCategory } from '@/entities/product'

export interface ProductsPageProps {
  searchParams: Promise<{ productCategory: ProductCategory }>
}
