'use client'

import {
  BottomArrowSVG,
  SegmentedSelect,
  SegmentedSelectOption,
} from '@/shared/components'
import { productCategoriesOptions, products, sortMap } from './constants'
import { useState } from 'react'
import { ProductCard } from '@/entities/product'
import styles from './index.module.scss'
import { Sort } from './types'

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<SegmentedSelectOption>(
    productCategoriesOptions[0]
  )
  const [sort, setSort] = useState<Sort>('no')

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory.value
  )
  if (sort !== 'no') {
    filteredProducts.sort((p1, p2) => {
      const p1price = p1.minPrice || 0
      const p2price = p2.minPrice || 0
      if (sort === 'bottom') return p1price - p2price
      return p2price - p1price
    })
  }

  const handleSortClick = () => {
    setSort((prev) =>
      prev === 'no' ? 'bottom' : prev === 'bottom' ? 'top' : 'no'
    )
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <SegmentedSelect
          options={productCategoriesOptions}
          activeOption={activeCategory}
          setActiveOption={setActiveCategory}
        />
        <div className={styles.filters}>
          <div className={styles.sort} onClick={handleSortClick}>
            <span className={styles.sort__label}>Сортировать: </span>
            <span className={styles.sort__value}>{sortMap[sort]}</span>
            <BottomArrowSVG
              className={[
                styles.sort__arrow,
                styles[`sort__arrow_${sort}`],
              ].join(' ')}
            />
          </div>
        </div>
      </header>
      <div className={styles.main}>
        {filteredProducts.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            classNames={{ container: styles.product }}
          />
        ))}
      </div>
    </section>
  )
}
