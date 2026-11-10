'use client'

import Link from 'next/link'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { H2, SegmentedSelect, SegmentedSelectOption } from '@/shared/components'
import { ProductCard, ProductCategory } from '@/entities/product'
import {
  DEFAULT_CATEGORY_OPTION,
  popularProducts,
  productCategoriesOptions,
} from './constants'
import { useState } from 'react'

export const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState<SegmentedSelectOption>(
    DEFAULT_CATEGORY_OPTION,
  )

  const isAllProducts = activeCategory.value === DEFAULT_CATEGORY_OPTION.value
  const filteredPopularProducts = isAllProducts
    ? popularProducts
    : popularProducts.filter(
        (product) => product.category === activeCategory.value,
      )

  const showAllHref = isAllProducts
    ? ROUTES.PRODUCTS.BASE
    : ROUTES.PRODUCTS.WITH_QUERY({
        productCategory: activeCategory.value as ProductCategory,
      })

  return (
    <section className={styles.section}>
      <H2>Популярные товары</H2>

      <div className={styles.main}>
        <div className={styles.header}>
          <SegmentedSelect
            options={[DEFAULT_CATEGORY_OPTION, ...productCategoriesOptions]}
            activeOption={activeCategory}
            setActiveOption={setActiveCategory}
          />

          <Link href={showAllHref} className={styles.showAllLink}>
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
