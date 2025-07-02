import { ROUTES } from '@/config/routes'
import { MenuSection } from './types'
import { BLOCKS_IDS as LEASE_TERM_BLOCKS_IDS } from '@/app/lease-terms/constants'

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
    link: ROUTES.LEASE_TERMS.BASE,
    items: [
      {
        label: 'Требования к арендатору',
        link:
          ROUTES.LEASE_TERMS.BASE +
          `#${LEASE_TERM_BLOCKS_IDS.tenantRequirements}`,
      },
      {
        label: 'Условия доставки и самовывоза',
        link:
          ROUTES.LEASE_TERMS.BASE +
          `#${LEASE_TERM_BLOCKS_IDS.deliveryTermsAndConditions}`,
      },
      {
        label: 'Как оформить заказ',
        link:
          ROUTES.LEASE_TERMS.BASE + `#${LEASE_TERM_BLOCKS_IDS.howPlaceOrder}`,
      },
      {
        label: 'Пример договора',
        link:
          ROUTES.LEASE_TERMS.BASE + `#${LEASE_TERM_BLOCKS_IDS.leaseAgreement}`,
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
