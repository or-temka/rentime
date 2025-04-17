import { ROUTES } from '@/config/routes'
import { MenuSection } from './types'

export const menuSections: MenuSection[] = [
  {
    name: 'Каталог товаров',
    link: ROUTES.HOME,
    items: [
      { label: 'Отдых и досуг', link: ROUTES.HOME },
      { label: 'Для дома', link: ROUTES.HOME },
      { label: 'Туризм', link: ROUTES.HOME },
    ],
  },
  {
    name: 'Условия аренды',
    link: ROUTES.LEASE_TERMS,
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
    link: ROUTES.PAYMENT_AND_DELIVERY,
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
    link: ROUTES.CONTACTS,
    items: [
      {
        label: 'Контакты',
        link: ROUTES.CONTACTS,
      },
    ],
  },
]
