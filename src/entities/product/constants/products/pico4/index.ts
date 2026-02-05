import { PICO_4_GAMES } from '@/entities/game'
import { Product } from '@/entities/product'
import { AVAILABLE_PICO_4_GAMES } from './availableGames'
import { DOWNLOADED_PICO_4_GAMES } from './downloadedGames'

export const PICO4_ID: Product['id'] = 'pico4'

export const PICO4: Product = {
  id: PICO4_ID,
  name: {
    base: 'VR-очки Pico 4',
    short: 'Pico 4',
    cases: {
      accusative: 'VR-очки Pico 4',
      dative: 'VR-очков Pico 4',
      genitive: 'VR-очкам Pico 4',
      instrumental: 'VR-очки Pico 4',
      nominative: 'VR-очками Pico 4',
      prepositional: 'VR-очках Pico 4',
    },
  },
  feedbackCount: 12,
  rating: 5,
  imagesURL: {
    thumbnail: `/images/products/${PICO4_ID}/thumbnail.webp`,
    full: `/images/products/${PICO4_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 810,
      '2': 630,
      '3': 540,
      '4': 472,
      '5': 432,
      '6': 432,
      '7': 432,
      '10': 432,
      '14': 432,
      '30': 315,
      '60': 252,
    },
    weekends: {
      '1': 990,
      '2': 810,
      '3': 720,
      '4': 630,
      '5': 630,
      '6': 630,
      '7': 630,
      '10': 630,
      '14': 450,
      '30': 315,
      '60': 252,
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
    vk: 'https://vk.com/market/product/arenda-vr-ochki-pico-4-231455623-12701624',
  },
  equipment: [
    'Очки виртуальной реальности Pico 4',
    '2 геймпада для Pico 4',
    '2 Силиконовых накладки на геймпады Pico 4',
    'Аккумуляторные батарейки (4 штуки)',
    'Батарейки (4 штуки)',
    'Кабель type-c и блок питания для зарядки',
    'Кабель type-c - type-c для подключения к компьютеру',
    'Защитный кейс, защитная накладка для линз и тряпочка для протирки линз',
  ],
  keywords: [
    'аренда виар Ярославль',
    'прокат виар Ярославль',
    'аренда вр Ярославль',
    'прокат вр Ярославль',
    'аренда вр очков Ярославль',
    'прокат вр очков Ярославль',
    'аренда pico4',
    'прокат pico4',
    'аренда pico4 Ярославль',
    'прокат pico4 Ярославль',
    'аренда пико 4 Ярославль',
    'аренда пико4 Ярославль',
  ],
}
