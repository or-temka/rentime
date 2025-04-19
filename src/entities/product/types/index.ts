export type Product = {
  name: string
  rating: number
  image: string
  description?: string
  category?: ProductCategory
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
