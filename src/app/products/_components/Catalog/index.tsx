'use client'

import { SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { productCategoriesOptions, products } from './constants'
import { useState } from 'react'
import { ProductCard } from '@/entities/product'
import styles from './index.module.scss'

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState<SegmentedSelectOption>(
    productCategoriesOptions[0]
  )

  const filteredPopularProducts = products.filter(
    (product) => product.category === activeCategory.value
  )

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <SegmentedSelect
          options={productCategoriesOptions}
          activeOption={activeCategory}
          setActiveOption={setActiveCategory}
        />
        <div className={styles.filters}>
          <div className={styles.sort}>
            <span className={styles.sort__label}>Сортировать: </span>
            <span className={styles.sort__value}>сначала дешевле</span>
          </div>
        </div>
      </header>
      <div className={styles.main}>
        {filteredPopularProducts.map((product) => (
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
