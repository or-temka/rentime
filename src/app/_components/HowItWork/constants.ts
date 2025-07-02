import { ROUTES } from '@/config/routes'
import { HowItWorkItem } from './types'

export const howItWorkItems: HowItWorkItem[] = [
  {
    title: 'Выберите свой товар',
    paragraph: 'Сравнивайте и выбирайте среди доступных предложений',
    link: {
      text: 'Каталог товаров',
      url: ROUTES.PRODUCTS.BASE,
    },
  },
  {
    title: 'Забронируйте на нужные даты',
    paragraph: 'Уточните у менеджера доступную дату аренды',
    link: {
      text: 'Условия аренды',
      url: ROUTES.LEASE_TERMS.BASE,
    },
  },
  {
    title: 'Получите в пользование',
    paragraph:
      'Вы можете забрать и вернуть товар самостоятельно или заказать доставку',
    link: {
      text: 'Оплата и доставка',
      url: ROUTES.PAYMENT_AND_DELIVERY.BASE,
    },
  },
]
