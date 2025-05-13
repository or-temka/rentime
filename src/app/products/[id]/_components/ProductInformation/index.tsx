'use client'

import { informationSelectOptions } from './constants'
import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import styles from './index.module.scss'
import { useState } from 'react'
import { Price } from '../Price'
import { ProductInformationProps } from './types'

export const ProductInformation = ({ product }: ProductInformationProps) => {
  const [activeSection, setActiveSection] = useState<SegmentedSelectOption>(
    informationSelectOptions[0]
  )

  return (
    <div className={styles.container}>
      <SegmentedSelect
        activeOption={activeSection}
        setActiveOption={setActiveSection}
        options={informationSelectOptions}
        classNames={{
          desktop: { buttons: styles.desktopSelectButtons },
        }}
      />

      {activeSection.value === 'price' && <Price product={product} />}
    </div>
  )
}
