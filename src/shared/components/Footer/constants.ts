import { ROUTES } from '@/config/routes'
import { MenuSection } from './types'

export const menuSections: MenuSection[] = [
  {
    name: 'Каталог товаров',
    items: [
      { label: 'Отдых и досуг', link: ROUTES.HOME },
      { label: 'Для дома', link: ROUTES.HOME },
      { label: 'Туризм', link: ROUTES.HOME },
    ],
  },
  {
    name: 'Условия аренды',
    items: [
      {
        label: 'Кому доступна аренда',
        link: ROUTES.LEASE_TERMS,
      },
      {
        label: 'Условия самовывоза',
        link: ROUTES.LEASE_TERMS,
      },
      {
        label: 'Условия доставки',
        link: ROUTES.LEASE_TERMS,
      },
      {
        label: 'Как оформить заказ',
        link: ROUTES.LEASE_TERMS,
      },
    ],
  },
  {
    name: 'Оплата и доставка',
    items: [
      {
        label: 'Оплата',
        link: ROUTES.PAYMENT_AND_DELIVERY,
      },
      {
        label: 'Доставка',
        link: ROUTES.PAYMENT_AND_DELIVERY,
      },
      {
        label: 'Вопросы',
        link: ROUTES.PAYMENT_AND_DELIVERY,
      },
    ],
  },
  {
    name: 'Контакты',
    items: [
      {
        label: 'Контакты',
        link: ROUTES.CONTACTS,
      },
    ],
  },
]
