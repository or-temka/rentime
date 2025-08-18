'use client'

import {
  BottomArrowSVG,
  SegmentedSelect,
  SegmentedSelectOption,
  ShelvesArrowSVG,
} from '@/shared/components'
import { productCategoriesOptions, products, sortMap } from './constants'
import { useState } from 'react'
import { ProductCard, ProductCategory } from '@/entities/product'
import styles from './index.module.scss'
import { CatalogProps, Sort } from './types'
import { useRouter, useSearchParams } from 'next/navigation'
import { withQuery } from '@/shared/utils'
import { ProductsRouteQueryRecord } from '@/config/routeTypes'

export const Catalog = ({
  activeCategory: userActiveCategory,
}: CatalogProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState<SegmentedSelectOption>(
    productCategoriesOptions.find(
      (category) => category.value === userActiveCategory
    ) || productCategoriesOptions[0]
  )
  const [sort, setSort] = useState<Sort>('no')

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory.value
  )
  if (sort !== 'no') {
    filteredProducts.sort((p1, p2) => {
      const p1price = p1.price.weekends.one || p1.price.weekdays.one || 0
      const p2price = p2.price.weekends.one || p1.price.weekdays.one || 0
      if (sort === 'bottom') return p1price - p2price
      return p2price - p1price
    })
  }

  const handleSortClick = () => {
    setSort((prev) =>
      prev === 'no' ? 'bottom' : prev === 'bottom' ? 'top' : 'no'
    )
  }

  const setActiveCategoryHandler = (option: SegmentedSelectOption) => {
    const params = new URLSearchParams(searchParams)
    params.set('productCategory', option.value)
    router.push(
      withQuery<ProductsRouteQueryRecord>('/products', {
        productCategory: option.value as ProductCategory,
      })
    )
    setActiveCategory(option)
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <SegmentedSelect
          options={productCategoriesOptions}
          activeOption={activeCategory}
          setActiveOption={setActiveCategoryHandler}
        />
        <div className={styles.filters}>
          <div className={styles.sort} onClick={handleSortClick}>
            <ShelvesArrowSVG className={styles.sort__shelves} />
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
