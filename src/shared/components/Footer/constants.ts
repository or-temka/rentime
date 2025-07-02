import { ROUTES } from '@/config/routes'
import { MenuSection } from './types'
import { BLOCKS_IDS as LEASE_TERM_BLOCKS_IDS } from '@/app/lease-terms/constants'
import { BLOCKS_IDS as PAYMENT_AND_DELIVERY_BLOCKS_IDS } from '@/app/payment-and-delivery/constants'
import { PaymentAndDeliveryTabs } from '@/app/payment-and-delivery/_components/PaymentAndDelivery/types'

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
    link: ROUTES.PAYMENT_AND_DELIVERY.BASE,
    items: [
      {
        label: 'Доставка',
        link: ROUTES.PAYMENT_AND_DELIVERY.WITH_QUERY(
          {
            activeTab: PaymentAndDeliveryTabs.delivery,
          },
          PAYMENT_AND_DELIVERY_BLOCKS_IDS.main
        ),
      },
      {
        label: 'Оплата',
        link: ROUTES.PAYMENT_AND_DELIVERY.WITH_QUERY(
          {
            activeTab: PaymentAndDeliveryTabs.payment,
          },
          PAYMENT_AND_DELIVERY_BLOCKS_IDS.main
        ),
      },
      {
        label: 'Карта цены доставки',
        link: ROUTES.PAYMENT_AND_DELIVERY.WITH_QUERY(
          {
            activeTab: PaymentAndDeliveryTabs.delivery,
          },
          PAYMENT_AND_DELIVERY_BLOCKS_IDS.deliveryPriceMap
        ),
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
