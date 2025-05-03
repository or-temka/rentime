'use client'

import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { useState } from 'react'
import { PAYMENT_AND_DELIVERY_TABS } from './constants'
import { PaymentSection } from '../PaymentSection'
import styles from './index.module.scss'
import { DeliverySection } from '../DeliverySection'

export const PaymentAndDelivery = () => {
  const [activeTab, setActiveTab] = useState<SegmentedSelectOption>(
    PAYMENT_AND_DELIVERY_TABS[0]
  )

  return (
    <section className={styles.section}>
      <SegmentedSelect
        options={PAYMENT_AND_DELIVERY_TABS}
        activeOption={activeTab}
        setActiveOption={setActiveTab}
      />

      {activeTab.value === 'delivery' && <DeliverySection />}

      {activeTab.value === 'payment' && <PaymentSection />}
    </section>
  )
}
