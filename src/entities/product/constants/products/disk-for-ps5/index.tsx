import { Product } from '@/entities/product'
import { UlLi } from '@/shared/components'
import { RentRule } from '@/shared/components/RentRule'
import generalStyles from '@/app/lease-terms/rulesGeneral.module.scss'

export const DISK_FOR_PS5_ID: Product['id'] = 'disk-for-ps5'

export const DISK_FOR_PS5: Product = {
  id: DISK_FOR_PS5_ID,
  name: {
    base: 'Диск для игровой приставки PlayStation 5',
    short: 'Диск PlayStation 5',
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
    thumbnail: `/images/products/${DISK_FOR_PS5_ID}/thumbnail.webp`,
    full: `/images/products/${DISK_FOR_PS5_ID}/full.webp`,
  },
  price: {
    useOnlyWeekdaysPrice: true,
    weekdaysHideDays: ['1', '2', '3', '4', '5', '6', '10'],
    weekdays: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 40,
      '10': 0,
      '14': 28,
      '21': 23,
      '30': 19,
      '60': 16,
    },
    weekendsHideDays: ['1', '2', '3', '4', '5', '6', '10'],
    weekends: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 40,
      '10': 0,
      '14': 28,
      '21': 23,
      '30': 19,
      '60': 16,
    },
  },
  category: 'rest and leisure',
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/disk_playstation_5_arenda_prokat_7870203255',
    vk: 'https://vk.com/market/product/disk-playstation-5-arenda-231455623-12701645',
  },
  equipment: ['Диск для игровой консоли PlayStation 5'],
  keywords: [
    'аренда диска для игровой консоли PlayStation 5',
    'прокат диска для игровой консоли PlayStation 5',
    'аренда диска для PlayStation 5',
    'прокат диска для PlayStation 5',
    'аренда диска для ps 5',
    'прокат диска для ps 5',
    'аренда диска для ps5',
    'прокат диска для ps5',
    'аренда диска для пс 5',
    'прокат диска для пс 5',
    'аренда диска для пс5',
    'прокат диска для пс5',
    'арендовать диск для консоли PlayStation 5',
    'арендовать диск для PlayStation 5',
    'аренда диска для PlayStation 5 Ярославль',
    'аренда диска для ps 5 Ярославль',
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
  leaseAndTerms: (
    <RentRule title="Для диска PlayStation 5 запрещено:">
      <ul className={generalStyles.ul}>
        <UlLi>
          Мыть диск или протирать чем-либо, кроме специальной салфетки для
          оптики.
        </UlLi>
        <UlLi>Брать диск за плоскую сторону - необходимо брать только за края.</UlLi>
      </ul>
    </RentRule>
  ),
}
