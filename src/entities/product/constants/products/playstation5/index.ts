import { PLAYSTATION_5_GAMES } from '@/entities/game'
import { Product } from '@/entities/product'
import { AVAILABLE_PLAYSTATION_5_GAMES } from './availableGames'

export const PLAYSTATION5_ID: Product['id'] = 'playstation5'

export const PLAYSTATION5: Product = {
  id: PLAYSTATION5_ID,
  name: {
    base: 'Игровая консоль PlayStation 5',
    short: 'PlayStation 5',
    cases: {
      accusative: 'игровая консоль PlayStation 5',
      dative: 'игровой консоли PlayStation 5',
      genitive: 'игровой консоли PlayStation 5',
      instrumental: 'игровую консоль PlayStation 5',
      nominative: 'игровой консолью PlayStation 5',
      prepositional: 'игровой консоли PlayStation 5',
    },
  },
  feedbackCount: 15,
  rating: 5,
  imagesURL: {
    thumbnail: `/images/products/${PLAYSTATION5_ID}/thumbnail.webp`,
    full: `/images/products/${PLAYSTATION5_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 585,
      '2': 495,
      '3': 450,
      '4': 405,
      '5': 360,
      '6': 360,
      '7': 360,
      '10': 360,
      '14': 360,
      '30': 297,
      '60': 225,
    },
    weekends: {
      '1': 765,
      '2': 675,
      '3': 585,
      '4': 495,
      '5': 495,
      '6': 495,
      '7': 495,
      '10': 495,
      '14': 423,
      '30': 297,
      '60': 225,
    },
  },
  category: 'rest and leisure',
  description:
    'PlayStation 5 – это мощная игровая консоль нового поколения с невероятной графикой, быстрой загрузкой и полным погружением в игровой процесс. ',
  games: {
    all: PLAYSTATION_5_GAMES,
    available: AVAILABLE_PLAYSTATION_5_GAMES,
  },
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/sony_playstation_5_arenda_prokat_7326172571?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJvcVBkaUZCYWtaeFFaaE1VIjt9few2Lz8AAAA',
    vk: 'https://vk.com/market/product/arenda-playstation-5-231455623-12700124',
  },
  equipment: [
    'Приставка PlayStation 5',
    '2 геймпада Dualsense',
    'Провод питания PlayStation 5',
    'Кабель HDMI - HDMI для подключения к телевизору или монитору',
    'Зарядный кабель для геймпадов Dualsense',
    'Защитный кейс для переноски приставки',
  ],
  keywords: [
    'аренда ps5',
    'прокат ps5',
    'арендовать ps5',
    'аренда ps5 Ярославль',
    'прокат ps5 Ярославль',
    'аренда пс5',
    'прокат пс5',
    'арендовать пс5',
    'аренда пс5 Ярославль',
    'прокат пс5 Ярославль',
    'аренда плейстейшон',
    'аренда play station',
    'аренда плейстейшен',
    'аренда плейстейшен 5',
    'аренда плейстейшен 5 Ярославль',
    'прокат плейстейшен 5',
    'прокат плейстейшен 5 Ярославль',
    'арендовать плейстейшен 5',
  ],
  markup: {
    listOfGames: {
      desc: `Всего игр более 500 - здесь представлена только меньшая из них часть. 
      Если вам нужна определенная игра и вы не увидели ее в этом списке, напишите нам для уточнения наличия игры в подписке.`,
    },
  },
}
