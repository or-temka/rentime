export type ProductPriceForDays = number

export type Product = {
  id: string
  name: string
  feedbackCount: number
  rating: number
  imagesURL: {
    thumbnail: string
    full: string
  }
  price: {
    perDay: {
      one: ProductPriceForDays
      two: ProductPriceForDays
      three: ProductPriceForDays
      four: ProductPriceForDays
      oneWeek: ProductPriceForDays
      overWeek: ProductPriceForDays
    }
  }
  description?: string
  category?: ProductCategory
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
