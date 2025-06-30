import { withQuery } from '@/shared/utils'
import { ProductsRouteQueryRecord } from './routeTypes'

export const ROUTES = {
  HOME: '/',
  PRODUCTS: {
    BASE: '/products',
    PRODUCT: (productName: string) => `/products/${productName}`,
    WITH_QUERY: (query?: ProductsRouteQueryRecord) =>
      withQuery<ProductsRouteQueryRecord>('/products', query),
  },
  LEASE_TERMS: '/lease-terms',
  PAYMENT_AND_DELIVERY: '/payment-and-delivery',
  CONTACTS: '/contacts',
}
