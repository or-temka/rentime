import { PICO_4_GAMES } from '@/entities/game'
import { getProductImageRoute, Product } from '@/entities/product'
import { AVAILABLE_PICO_4_GAMES } from './availableGames'
import { DOWNLOADED_PICO_4_GAMES } from './downloadedGames'

export const PICO4_ID: Product['id'] = 'pico4'

export const PICO4: Product = {
  id: PICO4_ID,
  name: 'Pico 4',
  feedbackCount: 1,
  rating: 5,
  imagesURL: {
    thumbnail: getProductImageRoute(PICO4_ID, 'thumbnail'),
    full: getProductImageRoute(PICO4_ID, 'thumbnail'),
  },
  price: {
    perDay: {
      one: 1100,
      two: 900,
      three: 800,
      overFour: 700,
      overTwoWeeks: 500,
      oneMonth: 350,
      twoMonths: 280,
    },
  },
  category: 'rest and leisure',
  description:
    'VR oчки Pico 4 – это продвинутая VR-гарнитура, обеспечивающая превосходную производительность и комфорт без проводов.',
  games: {
    all: PICO_4_GAMES,
    available: AVAILABLE_PICO_4_GAMES,
    downloaded: DOWNLOADED_PICO_4_GAMES,
  },
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/viar_ochki_pico_4_arenda_prokat_7326125846?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJvcVBkaUZCYWtaeFFaaE1VIjt9few2Lz8AAAA',
  },
}
