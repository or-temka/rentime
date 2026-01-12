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
  feedbackCount: 0,
  rating: 0,
  imagesURL: {
    thumbnail: `/images/products/${LOGITECH_G29_ID}/thumbnail.webp`,
    full: `/images/products/${LOGITECH_G29_ID}/full.webp`,
  },
  price: {
    weekdays: {
      one: 450,
      two: 420,
      three: 370,
      four: 340,
      five: 300,
    },
    weekends: {
      one: 500,
      two: 450,
      three: 400,
      overFour: 350,
      overTwoWeeks: 300,
      oneMonth: 250,
      twoMonths: 200,
    },
  },
  category: 'rest and leisure',
  description:
    'Logitech G29 с рычагом КПП — это высокоточный гоночный комплект для симуляторов с точной обратной связью, стабильной механикой и полноценным управлением трансмиссией.',
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/igrovoy_rul_logitech_g29_s_kpp_arenda_prokat_7774617447',
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
    'прокат игрового руля Ярославль'
  ]
}
