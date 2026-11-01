import { Product } from '@/entities/product'
import { RentRule } from '@/shared/components/RentRule'
import { Li } from '@/shared/components'
import generalStyles from '@/app/lease-terms/rulesGeneral.module.scss'

export const PLAYSTATION5_GTA6_ID: Product['id'] = 'playstation5-gta6'

const VK_RENT_LINK =
  process.env.NEXT_PUBLIC_VK_COMPANY_MESSANGER_LINK ||
  process.env.NEXT_PUBLIC_VK_COMPANY_PROFILE_LINK ||
  'https://vk.com/rental_rentime'

export const PLAYSTATION5_GTA6: Product = {
  id: PLAYSTATION5_GTA6_ID,
  name: {
    base: 'Игровая консоль PlayStation 5 с игрой GTA 6',
    short: 'PlayStation 5 + GTA 6',
    cases: {
      accusative: 'игровая консоль PlayStation 5 с игрой GTA 6',
      dative: 'игровой консоли PlayStation 5 с игрой GTA 6',
      genitive: 'игровой консоли PlayStation 5 с игрой GTA 6',
      instrumental: 'игровую консоль PlayStation 5 с игрой GTA 6',
      nominative: 'игровой консолью PlayStation 5 с игрой GTA 6',
      prepositional: 'игровой консоли PlayStation 5 с игрой GTA 6',
    },
  },
  feedbackCount: 0,
  rating: 0,
  imagesURL: {
    thumbnail: `/images/products/${PLAYSTATION5_GTA6_ID}/thumbnail.webp`,
    full: `/images/products/${PLAYSTATION5_GTA6_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 1400,
      '2': 1300,
      '3': 1100,
      '4': 1000,
      '5': 900,
      '6': 900,
      '7': 900,
      '10': 900,
      '14': 900,
      '21': 900,
      '30': 660,
      '60': 500,
    },
    weekends: {
      '1': 1700,
      '2': 1600,
      '3': 1400,
      '4': 1200,
      '5': 1200,
      '6': 1200,
      '7': 1200,
      '10': 1200,
      '14': 980,
      '21': 980,
      '30': 660,
      '60': 500,
    },
  },
  category: 'rest and leisure',
  description:
    'PlayStation 5 в комплекте с диском Grand Theft Auto VI. Консоль нового поколения с быстрой загрузкой, двумя геймпадами и игрой GTA 6 на диске.',
  links: {
    vk: VK_RENT_LINK,
  },
  equipment: [
    'Приставка PlayStation 5',
    '2 геймпада Dualsense',
    'Провод питания PlayStation 5',
    'Кабель HDMI - HDMI для подключения к телевизору или монитору',
    'Зарядный кабель для геймпадов Dualsense',
    'Защитный кейс для переноски приставки',
    'Диск Grand Theft Auto VI (GTA 6)',
  ],
  keywords: [
    'аренда ps5 gta 6',
    'прокат ps5 gta 6',
    'аренда ps5 с gta 6',
    'прокат ps5 с gta 6',
    'арендовать ps5 с gta 6',
    'аренда ps5 с gta 6 Ярославль',
    'прокат ps5 с gta 6 Ярославль',
    'аренда ps5 с гта 6',
    'прокат ps5 с гта 6',
    'аренда пс5 с гта 6',
    'прокат пс5 с гта 6',
    'аренда пс5 с гта 6 Ярославль',
    'прокат пс5 с гта 6 Ярославль',
    'арендовать пс5 с гта 6',
    'аренда playstation 5 с gta 6',
    'аренда playstation 5 с gta 6 Ярославль',
    'прокат playstation 5 с gta 6 Ярославль',
    'аренда плейстейшен 5 с гта 6',
    'прокат плейстейшен 5 с гта 6',
    'аренда плейстейшен 5 с gta 6 Ярославль',
    'аренда gta 6',
    'прокат gta 6',
    'аренда gta 6 Ярославль',
    'прокат gta 6 Ярославль',
    'аренда gta vi',
    'прокат gta vi',
    'аренда grand theft auto 6',
    'аренда grand theft auto vi',
    'прокат grand theft auto vi Ярославль',
    'аренда гта 6',
    'прокат гта 6',
    'аренда гта 6 Ярославль',
    'прокат гта 6 Ярославль',
  ],
  leaseAndTerms: (
    <>
      <RentRule title="Для PlayStation 5 запрещено:">
        <ul className={generalStyles.ul}>
          <Li>Изменять настройки консоли, выходить из текущей учётной записи.</Li>
          <Li>
            Нарушать правила PlayStation, в том числе использовать нецензурную
            лексику, оскорбления в оналйн-играх.
          </Li>
          <Li>
            Осуществлять любые действия, ведущие к блокировке консоли или аккаунта,
            в том числе использование читов, ботов, стороннего программного
            обеспечения.
          </Li>
          <Li>
            Отключать кабель питания, пока консоль полностью не выключиться.
          </Li>
          <Li>
            Ставить консоль с источниками тепла и в пыльные или влажные места.
          </Li>
        </ul>
      </RentRule>
      <RentRule title="Для диска GTA 6 запрещено:">
        <ul className={generalStyles.ul}>
          <Li>
            Мыть диск или протирать чем-либо, кроме специальной салфетки для
            оптики.
          </Li>
          <Li>
            Брать диск за плоскую сторону - необходимо брать только за края.
          </Li>
        </ul>
      </RentRule>
    </>
  ),
}
