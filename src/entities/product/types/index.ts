import { GameRecord, Games } from '@/entities/game'

export type ProductPriceForDays = number

export type dayKey =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '10'
  | '14'
  | '30'
  | '60'

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
    /**
     * Рабочие дни
     */
    weekdays: Record<dayKey, ProductPriceForDays>
    /**
     * Выходные и праздничные дни
     */
    weekends: Record<dayKey, ProductPriceForDays>
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
    vk?: string
  }
  equipment?: string[]
  keywords?: string[]
  markup?: {
    listOfGames?: {
      desc?: string
    }
  }
  textWithResourceBtn?: {
    text: string
    button: {
      text: string
      link: string
    }
  }
}

export type ProductCategory = 'rest and leisure' | 'for home' | 'tourism'
