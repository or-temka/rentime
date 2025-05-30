'use client'

import { informationSelectOptions } from './constants'
import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import styles from './index.module.scss'
import { useState } from 'react'
import { Price } from '../Price'
import { ProductInformationProps } from './types'
import { Equipment } from '../Equipment'

export const ProductInformation = ({ product }: ProductInformationProps) => {
  const [activeSection, setActiveSection] = useState<SegmentedSelectOption>(
    informationSelectOptions[0]
  )

  return (
    <section className={styles.container}>
      <SegmentedSelect
        activeOption={activeSection}
        setActiveOption={setActiveSection}
        options={informationSelectOptions}
        classNames={{
          desktop: { buttons: styles.desktopSelectButtons },
        }}
      />

      {activeSection.value === 'price' && <Price product={product} />}
      {activeSection.value === 'bundling' && <Equipment product={product} />}
    </section>
  )
}
