'use client'

import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { useState } from 'react'
import { PAYMENT_AND_DELIVERY_TABS } from './constants'

export const PaymentAndDelivery = () => {
  const [activeTab, setActiveTab] = useState<SegmentedSelectOption>(
    PAYMENT_AND_DELIVERY_TABS[0]
  )

  return (
    <section>
      <SegmentedSelect
        options={PAYMENT_AND_DELIVERY_TABS}
        activeOption={activeTab}
        setActiveOption={setActiveTab}
      />

      {activeTab.value === 'delivery' && <div>Доставка</div>}

      {activeTab.value === 'payment' && <div>Оплата</div>}
    </section>
  )
}
