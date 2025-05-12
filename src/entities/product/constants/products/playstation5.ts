import { Product } from '../../types'
import { getProductImageRoute } from '../../utils'

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
}
