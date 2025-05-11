export type Product = {
  id: string
  name: string
  feedbackCount: number
  rating: number
  imagesURL: {
    thumbnail: string
    full: string
  }
  description?: string
  category?: ProductCategory
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
