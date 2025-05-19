import { PICO_4_GAMES } from '@/entities/game'
import { getProductImageRoute, Product } from '@/entities/product'
import { AVAILABLE_PICO_4_GAMES } from './availableGames'

export const PICO4_ID: Product['id'] = 'pico4'

export const PICO4: Product = {
  id: PICO4_ID,
  name: 'Pico 4',
  feedbackCount: 30,
  rating: 4,
  imagesURL: {
    thumbnail: getProductImageRoute(PICO4_ID, 'thumbnail'),
    full: getProductImageRoute(PICO4_ID, 'thumbnail'),
  },
  price: {
    perDay: {
      one: 1200,
      two: 1100,
      three: 1000,
      four: 900,
      oneWeek: 800,
      overWeek: 750,
    },
  },
  category: 'rest and leisure',
  description: 'Описание для pico 4',
  games: {
    all: PICO_4_GAMES,
    available: AVAILABLE_PICO_4_GAMES,
  },
}
