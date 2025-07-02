'use client'

import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { useState } from 'react'
import { PAYMENT_AND_DELIVERY_TABS } from './constants'
import { PaymentSection } from '../PaymentSection'
import styles from './index.module.scss'
import { DeliverySection } from '../DeliverySection'
import { BLOCKS_IDS } from '../../constants'
import { useSearchParams } from 'next/navigation'
import { PaymentAndDeliveryTabs } from './types'

export const PaymentAndDelivery = () => {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<SegmentedSelectOption>(
    PAYMENT_AND_DELIVERY_TABS.find(
      (tab) => tab.value === searchParams.get('activeTab')
    ) || PAYMENT_AND_DELIVERY_TABS[0]
  )

  return (
    <section className={styles.section} id={BLOCKS_IDS.main}>
      <SegmentedSelect
        options={PAYMENT_AND_DELIVERY_TABS}
        activeOption={activeTab}
        setActiveOption={setActiveTab}
      />

      {activeTab.value === PaymentAndDeliveryTabs.delivery && (
        <DeliverySection />
      )}

      {activeTab.value === PaymentAndDeliveryTabs.payment && <PaymentSection />}
    </section>
  )
}
