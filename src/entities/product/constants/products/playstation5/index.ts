import { PLAYSTATION_5_GAMES } from '@/entities/game'
import { getProductImageRoute, Product } from '@/entities/product'
import { AVAILABLE_PLAYSTATION_5_GAMES } from './availableGames'

export const PLAYSTATION5_ID: Product['id'] = 'playstation5'

export const PLAYSTATION5: Product = {
  id: PLAYSTATION5_ID,
  name: 'PlayStation 5',
  feedbackCount: 1050,
  rating: 5,
  imagesURL: {
    thumbnail: getProductImageRoute(PLAYSTATION5_ID, 'thumbnail'),
    full: getProductImageRoute(PLAYSTATION5_ID, 'full'),
  },
  price: {
    perDay: {
      one: 950,
      two: 900,
      three: 850,
      four: 800,
      oneWeek: 750,
      overWeek: 700,
    },
  },
  category: 'rest and leisure',
  description: 'Описание для play station 5',
  games: {
    all: PLAYSTATION_5_GAMES,
    available: AVAILABLE_PLAYSTATION_5_GAMES,
  },
}
