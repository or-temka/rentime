import { ROUTES } from '@/config/routes'
import { NavigationElement } from './types'

export const navigationElements: NavigationElement[] = [
  {
    label: 'Каталог товаров',
    link: ROUTES.PRODUCTS.BASE,
  },
  {
    label: 'Условия аренды',
    link: ROUTES.LEASE_TERMS,
  },
  {
    label: 'Оплата и доставка',
    link: ROUTES.PAYMENT_AND_DELIVERY,
  },
  {
    label: 'Контакты',
    link: ROUTES.CONTACTS,
  },
]
