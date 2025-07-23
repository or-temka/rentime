import { SegmentedSelectOption } from '@/shared/components'
import { PaymentAndDeliveryTabs } from './types'

export const PAYMENT_AND_DELIVERY_TABS: SegmentedSelectOption<PaymentAndDeliveryTabs>[] =
  [
    { value: PaymentAndDeliveryTabs.delivery, label: 'Доставка' },
    { value: PaymentAndDeliveryTabs.payment, label: 'Оплата' },
  ]
