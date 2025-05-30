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
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/sony_playstation_5_arenda_prokat_7326172571?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJvcVBkaUZCYWtaeFFaaE1VIjt9few2Lz8AAAA',
  },
  equipment: [
    '2 геймпада Dualsense',
    'Провод питания PlayStation 5',
    'Кабель HDMI - HDMI для подключения к телевизору или монитору',
    'Зарядный кабель для геймпадов Dualsense',
  ],
}
