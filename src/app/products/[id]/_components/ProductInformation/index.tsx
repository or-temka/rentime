'use client'

import { informationSelectOptions } from './constants'
import { DocumentSVG, SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import styles from './index.module.scss'
import { useState } from 'react'
import { Price } from '../Price'
import { ProductInformationProps } from './types'
import { Equipment } from '../Equipment'
import { LeaseAndTerms } from '../LeaseAndTerms'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'

export const ProductInformation = ({
  product,
  hasMainInstruction,
}: ProductInformationProps) => {
  const [activeSection, setActiveSection] = useState<SegmentedSelectOption>(
    informationSelectOptions[0],
  )

  return (
    <section className={styles.container}>
      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          <SegmentedSelect
            activeOption={activeSection}
            setActiveOption={setActiveSection}
            options={informationSelectOptions}
            classNames={{
              desktop: { buttons: styles.desktopSelectButtons },
            }}
          />
        </div>
        {hasMainInstruction && (
          <Link
            href={ROUTES.PRODUCTS.INSTRUCTION(product.id)}
            className={styles.instructionButton}
          >
            <DocumentSVG className={styles.instructionIcon} />
            Инструкция
          </Link>
        )}
      </div>

      {activeSection.value === 'price' && <Price product={product} />}
      {activeSection.value === 'bundling' && <Equipment product={product} />}
      {activeSection.value === 'lease terms' && (
        <LeaseAndTerms product={product} />
      )}
    </section>
  )
}
