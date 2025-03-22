export const ROUTES = {
  HOME: '/',
  PRODUCTS: {
    BASE: '/products',
    PRODUCT: (productName: string) => `/products/${productName}`,
  },
  LEASE_TERMS: '/lease-terms',
  PAYMENT_AND_DELIVERY: '/payment-and-delivery',
  CONTACTS: '/contacts',
}
