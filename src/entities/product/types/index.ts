export enum ProductNames {
  PICO4 = 'pico4',
  PLAYSTATION5 = 'playstation5',
}

export type Product = {
  name: ProductNames
  rating: number
  image: string
  description?: string
  category?: ProductCategory
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
