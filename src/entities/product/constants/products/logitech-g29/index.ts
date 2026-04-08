import { Product } from '@/entities/product'

export const LOGITECH_G29_ID: Product['id'] = 'logitech-g29'

export const LOGITECH_G29: Product = {
  id: LOGITECH_G29_ID,
  name: {
    base: 'Игровой руль Logitech G29 с КПП и педалями',
    short: 'Logitech G29',
    cases: {
      accusative: 'игровой руль Logitech G29',
      dative: 'игровому рулю Logitech G29',
      genitive: 'игрового руля Logitech G29',
      instrumental: 'игровой руль Logitech G29',
      nominative: 'игровым рулем Logitech G29',
      prepositional: 'игрового руля Logitech G29',
    },
  },
  feedbackCount: 1,
  rating: 5,
  imagesURL: {
    thumbnail: `/images/products/${LOGITECH_G29_ID}/thumbnail.webp`,
    full: `/images/products/${LOGITECH_G29_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 350,
      '2': 260,
      '3': 230,
      '4': 200,
      '5': 180,
      '6': 180,
      '7': 180,
      '10': 180,
      '14': 170,
      '21': 170,
      '30': 130,
      '60': 100,
    },
    weekends: {
      '1': 370,
      '2': 300,
      '3': 250,
      '4': 220,
      '5': 220,
      '6': 220,
      '7': 220,
      '10': 220,
      '14': 170,
      '21': 170,
      '30': 130,
      '60': 100,
    },
  },
  category: 'rest and leisure',
  description:
    'Logitech G29 с рычагом КПП — это высокоточный гоночный комплект для симуляторов с точной обратной связью, стабильной механикой и полноценным управлением трансмиссией.',
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/igrovoy_rul_logitech_g29_s_kpp_arenda_prokat_7774617447',
    vk: 'https://vk.com/market/product/igrovoy-rul-logitech-g29-s-kpp-arenda-231455623-12701626',
  },
  equipment: [
    'Игровой руль Logitech G29',
    'Педали для руля',
    'Рычаг переключения передач Logitech',
    'Все необходимые кабели для подключения',
    'Сумка для переноски',
  ],
  keywords: [
    'аренда logitech g29',
    'прокат logitech g29',
    'арендовать logitech g29',
    'аренда logitech g29 Ярославль',
    'прокат logitech g29 Ярославль',
    'аренда игрового руля',
    'прокат игрового руля',
    'арендовать игровой руль',
    'аренда игрового руля Ярославль',
    'прокат игрового руля Ярославль',
  ],
}
