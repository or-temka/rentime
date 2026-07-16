import { ProductCategory } from '../types'

export const productCategories: ProductCategory[] = [
  'rest and leisure',
  'health',
  'for home',
  'tourism',
]

export const productCattegoryMap: Record<ProductCategory, string> = {
  'rest and leisure': 'Отдых и досуг',
  health: 'Здоровье',
  'for home': 'Для дома',
  tourism: 'Туризм',
}
