import { PLAYSTATION_5_GAMES } from '@/entities/game'
import { Product } from '@/entities/product'
import { AVAILABLE_PLAYSTATION_5_GAMES } from './availableGames'
import { RentRule } from '@/shared/components/RentRule'
import { UlLi } from '@/shared/components'
import generalStyles from '@/app/lease-terms/rulesGeneral.module.scss'

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
  feedbackCount: 23,
  rating: 5,
  imagesURL: {
    thumbnail: `/images/products/${PLAYSTATION5_ID}/thumbnail.webp`,
    full: `/images/products/${PLAYSTATION5_ID}/full.webp`,
  },
  price: {
    weekdays: {
      '1': 660,
      '2': 610,
      '3': 520,
      '4': 470,
      '5': 420,
      '6': 420,
      '7': 420,
      '10': 420,
      '14': 420,
      '21': 420,
      '30': 310,
      '60': 230,
    },
    weekends: {
      '1': 800,
      '2': 760,
      '3': 660,
      '4': 570,
      '5': 570,
      '6': 570,
      '7': 570,
      '10': 570,
      '14': 460,
      '21': 460,
      '30': 310,
      '60': 230,
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
    vk: 'https://vk.com/market/product/playstation-5-arenda-231455623-12700124',
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
  leaseAndTerms: (
    <RentRule title="Для PlayStation 5 запрещено:">
      <ul className={generalStyles.ul}>
        <UlLi>
          Изменять настройки консоли, выходить из текущей учётной записи.
        </UlLi>
        <UlLi>
          Нарушать правила PlayStation, в том числе использовать нецензурную
          лексику, оскорбления в оналйн-играх.
        </UlLi>
        <UlLi>
          Осуществять любые действия, ведущие к блокировке консоли или аккаунта,
          в том числе использование читов, ботов, стороннего программного
          обеспечения.
        </UlLi>
        <UlLi>
          Отключать кабель питания, пока консоль полностью не выключиться.
        </UlLi>
        <UlLi>
          Ставить консоль с источниками тепла и в пыльные или влажные места.
        </UlLi>
      </ul>
    </RentRule>
  ),
}
