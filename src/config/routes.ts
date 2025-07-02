import { withQuery } from '@/shared/utils'
import {
  PaymentAndDeliveryRouteQueryRecord,
  ProductsRouteQueryRecord,
} from './routeTypes'

export const ROUTES = {
  HOME: '/',
  PRODUCTS: {
    BASE: '/products',
    PRODUCT: (productName: string) => `/products/${productName}`,
    WITH_QUERY: (query?: ProductsRouteQueryRecord) =>
      withQuery<ProductsRouteQueryRecord>('/products', query),
  },
  LEASE_TERMS: {
    BASE: '/lease-terms',
  },
  PAYMENT_AND_DELIVERY: {
    BASE: '/payment-and-delivery',
    WITH_QUERY: (query?: PaymentAndDeliveryRouteQueryRecord, hash?: string) =>
      withQuery<PaymentAndDeliveryRouteQueryRecord>(
        '/payment-and-delivery',
        query,
        hash
      ),
  },
  CONTACTS: '/contacts',
}
