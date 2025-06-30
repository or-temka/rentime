import { ROUTES } from '@/config/routes'
import { MenuSection } from './types'

export const menuSections: MenuSection[] = [
  {
    name: 'Каталог товаров',
    link: ROUTES.PRODUCTS.BASE,
    items: [
      {
        label: 'Отдых и досуг',
        link: ROUTES.PRODUCTS.WITH_QUERY({
          productCategory: 'rest and leisure',
        }),
      },
      {
        label: 'Для дома',
        link: ROUTES.PRODUCTS.WITH_QUERY({
          productCategory: 'for home',
        }),
      },
      {
        label: 'Туризм',
        link: ROUTES.PRODUCTS.WITH_QUERY({
          productCategory: 'tourism',
        }),
      },
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
