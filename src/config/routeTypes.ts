import { PaymentAndDeliveryTabs } from '@/app/payment-and-delivery/_components/PaymentAndDelivery/types'
import { ProductCategory } from '@/entities/product'
import { QueryRecords } from '@/shared/utils'

export interface ProductsRouteQueryRecord extends QueryRecords {
  productCategory: ProductCategory
}

export interface PaymentAndDeliveryRouteQueryRecord extends QueryRecords {
  activeTab: PaymentAndDeliveryTabs
}
