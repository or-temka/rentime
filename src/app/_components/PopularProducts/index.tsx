'use client'

import Link from 'next/link'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { H2, SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { ProductCard } from '@/entities/product'
import { popularProducts, productCategoriesOptions } from './constants'
import { useState } from 'react'

export const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState<SegmentedSelectOption>(
    productCategoriesOptions[0]
  )

  const filteredPopularProducts = popularProducts.filter(
    (product) => product.category === activeCategory.value
  )

  return (
    <section className={styles.section}>
      <H2>Популярные товары</H2>

      <div className={styles.main}>
        <div className={styles.header}>
          <SegmentedSelect
            options={productCategoriesOptions}
            activeOption={activeCategory}
            setActiveOption={setActiveCategory}
          />

          <Link href={ROUTES.HOME} className={styles.showAllLink}>
            Посмотреть все
          </Link>
        </div>

        <div className={styles.content}>
          {filteredPopularProducts.map((product) => (
            <ProductCard
              {...product}
              key={product.id}
              classNames={{ container: styles.product }}
            />
          ))}
        </div>
        {filteredPopularProducts.length === 0 && (
          <span className={styles.empty}>
            В данной категории пока нет товаров, но они скоро появятся!
          </span>
        )}
      </div>
    </section>
  )
}
