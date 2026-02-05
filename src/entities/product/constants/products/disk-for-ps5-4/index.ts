import { Product } from '@/entities/product'

export const DISK_FOR_PS5_4_ID: Product['id'] = 'disk-for-ps5-4'

export const DISK_FOR_PS5_4: Product = {
  id: DISK_FOR_PS5_4_ID,
  name: {
    base: 'Диск для игровой приставки PlayStation 5 и PlayStation 4',
    short: 'Диск PlayStation 5 / 4',
    cases: {
      accusative: 'диск для PlayStation 5',
      dative: 'диску для PlayStation 5',
      genitive: 'диска для PlayStation 5',
      instrumental: 'диск для PlayStation 5',
      nominative: 'диском для PlayStation 5',
      prepositional: 'диска для PlayStation 5',
    },
  },
  feedbackCount: 0,
  rating: 0,
  imagesURL: {
    thumbnail: `/images/products/${DISK_FOR_PS5_4_ID}/thumbnail.webp`,
    full: `/images/products/${DISK_FOR_PS5_4_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 135,
      '2': 90,
      '3': 70,
      '4': 60,
      '5': 55,
      '6': 55,
      '7': 55,
      '10': 55,
      '14': 55,
      '30': 35,
      '60': 30,
    },
    weekends: {
      '1': 150,
      '2': 100,
      '3': 80,
      '4': 70,
      '5': 70,
      '6': 70,
      '7': 70,
      '10': 70,
      '14': 55,
      '30': 35,
      '60': 30,
    },
  },
  category: 'rest and leisure',
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/disk_playstation_5_4_arenda_prokat_7870203255',
    vk: 'https://vk.com/market/product/disk-playstation-5-4-arenda-prokat-231455623-12701645',
  },
  equipment: ['Диск для игровой консоли PlayStation 5 / 4'],
  keywords: [
    'аренда диска для игровой консоли PlayStation 5',
    'аренда диска для игровой консоли PlayStation 4',
    'прокат диска для игровой консоли PlayStation 5',
    'прокат диска для игровой консоли PlayStation 4',
    'аренда диска для PlayStation 5',
    'аренда диска для PlayStation 4',
    'прокат диска для PlayStation 5',
    'прокат диска для PlayStation 4',
    'аренда диска для ps 5',
    'аренда диска для ps 4',
    'прокат диска для ps 5',
    'прокат диска для ps 4',
    'аренда диска для ps5',
    'аренда диска для ps4',
    'прокат диска для ps5',
    'прокат диска для ps4',
    'аренда диска для пс 5',
    'аренда диска для пс 4',
    'прокат диска для пс 5',
    'прокат диска для пс 4',
    'аренда диска для пс5',
    'аренда диска для пс4',
    'прокат диска для пс5',
    'прокат диска для пс4',
    'арендовать диск для консоли PlayStation 5',
    'арендовать диск для консоли PlayStation 4',
    'арендовать диск для PlayStation 5',
    'арендовать диск для PlayStation 4',
    'аренда диска для PlayStation 5 Ярославль',
    'аренда диска для PlayStation 4 Ярославль',
    'аренда диска для ps 5 Ярославль',
    'аренда диска для ps 4 Ярославль',
  ],
  textWithResourceBtn: {
    text: 'Напишите нам, чтобы уточнить наличие желаемой игры.',
    button: {
      text: 'Уточнить наличие',
      link:
        process.env.NEXT_PUBLIC_VK_COMPANY_MESSANGER_LINK ||
        process.env.NEXT_PUBLIC_VK_COMPANY_PROFILE_LINK ||
        'https://vk.com/rental_rentime',
    },
  },
}
