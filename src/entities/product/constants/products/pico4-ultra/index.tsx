import { PICO_4_GAMES } from '@/entities/game'
import { Product } from '@/entities/product'
import { AVAILABLE_PICO_4_ULTRA_GAMES } from './availableGames'
import { DOWNLOADED_PICO_4_ULTRA_GAMES } from './downloadedGames'
import { RentRule } from '@/shared/components/RentRule'
import { UlLi } from '@/shared/components'
import generalStyles from '@/app/lease-terms/rulesGeneral.module.scss'

export const PICO4_ULTRA_ID: Product['id'] = 'pico4-ultra'

export const PICO4_ULTRA: Product = {
  id: PICO4_ULTRA_ID,
  name: {
    base: 'VR-шлем Pico 4 Ultra',
    short: 'Pico 4 Ultra',
    cases: {
      accusative: 'VR-шлем Pico 4 Ultra',
      dative: 'VR-шлема Pico 4 Ultra',
      genitive: 'VR-шлему Pico 4 Ultra',
      instrumental: 'VR-шлем Pico 4 Ultra',
      nominative: 'VR-шлемом Pico 4 Ultra',
      prepositional: 'VR-шлеме Pico 4 Ultra',
    },
  },
  feedbackCount: 1,
  rating: 5,
  imagesURL: {
    thumbnail: `/images/products/${PICO4_ULTRA_ID}/thumbnail.webp`,
    full: `/images/products/${PICO4_ULTRA_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 998,
      '2': 760,
      '3': 641,
      '4': 546,
      '5': 499,
      '6': 499,
      '7': 499,
      '10': 499,
      '14': 499,
      '21': 499,
      '30': 356,
      '60': 285,
    },
    weekends: {
      '1': 1188,
      '2': 950,
      '3': 831,
      '4': 712,
      '5': 712,
      '6': 712,
      '7': 712,
      '10': 712,
      '14': 499,
      '21': 499,
      '30': 356,
      '60': 285,
    },
  },
  category: 'rest and leisure',
  description:
    'VR oчки Pico 4 – это мощнейший скачок в мире виртуальной и смешанной реальности. Обновленная версия с 12 ГБ оперативной памяти и поддержкой полноцветной MR-реальности. Почувствуйте разницу с обычными VR-очками!',
  games: {
    all: PICO_4_GAMES,
    available: AVAILABLE_PICO_4_ULTRA_GAMES,
    downloaded: DOWNLOADED_PICO_4_ULTRA_GAMES,
  },
  links: {
    avito:
      'https://www.avito.ru/yaroslavl/predlozheniya_uslug/vr-shlem_pico_4_ultra_arenda_prokat_7966021730',
    vk: 'https://vk.com/market/product/vr-shlem-pico-4-ultra-arenda-231455623-13029658',
  },
  equipment: [
    'VR-шлем Pico 4 Ultra',
    '2 бескольцевых беспроводных контроллера',
    '2 Силиконовых накладки на геймпады Pico 4 utlra',
    'Аккумуляторные батарейки (4 штуки)',
    'Батарейки (4 штуки)',
    'Кабель type-c и блок питания для зарядки',
    'Кабель type-c - type-c для подключения к компьютеру',
    'Защитный кейс, защитная накладка для линз и тряпочка для протирки линз',
  ],
  keywords: [
    'аренда VR Ярославль',
    'прокат VR Ярославль',
    'аренда vr шлема Ярославль',
    'прокат vr шлема Ярославль',
    'аренда vr-очков Ярославль',
    'прокат vr-очков Ярославль',
    'аренда pico4 ultra',
    'прокат pico4 ultra',
    'аренда pico4 ultra Ярославль',
    'прокат pico4 ultra Ярославль',
    'аренда пико 4 ультра Ярославль',
    'аренда пико4 ультра Ярославль',
  ],
  leaseAndTerms: (
    <RentRule title="Для Pico 4 ultra запрещено:">
      <ul className={generalStyles.ul}>
        <UlLi>
          Удалять игры, изменять настройки шлема, выходить из текущей учётной
          записи, создавать новый аккаунт Pico.
        </UlLi>
        <UlLi>Использовать читы, прошивать, взламывать консоль.</UlLi>
        <UlLi>
          Направлять линзы VR-шлема на источник света, особенно солнца.
        </UlLi>
        <UlLi>Поднимать очки за верхнюю стяжку.</UlLi>
        <UlLi>Выкидывать батарейки, даже если они сели.</UlLi>
      </ul>
    </RentRule>
  ),
}
