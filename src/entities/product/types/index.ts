import { GameRecord, Games } from '@/entities/game'

export type ProductPriceForDays = number

export type Product = {
  id: string
  name: {
    base: string
    short: string
    cases: {
      nominative: string
      genitive: string
      dative: string
      accusative: string
      instrumental: string
      prepositional: string
    }
  }
  feedbackCount: number
  rating: number
  imagesURL: {
    thumbnail: string
    full: string
  }
  price: {
    weekdays: {
      one: ProductPriceForDays
      two: ProductPriceForDays
      three: ProductPriceForDays
      four: ProductPriceForDays
      five: ProductPriceForDays
    }
    weekends: {
      one: ProductPriceForDays
      two: ProductPriceForDays
      three: ProductPriceForDays
      overFour: ProductPriceForDays
      overTwoWeeks: ProductPriceForDays
      oneMonth: ProductPriceForDays
      twoMonths: ProductPriceForDays
    }
  }
  description?: string
  category?: ProductCategory
  games?: {
    all?: GameRecord
    available?: Games
    downloaded?: string[]
  }
  links?: {
    avito?: string
  }
  equipment?: string[]
  keywords?: string[]
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
