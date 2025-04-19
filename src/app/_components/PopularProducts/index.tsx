'use client'

import Link from 'next/link'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { Button } from '@/shared/components'
import {
  productCattegoryMap,
  ProductCard,
  ProductCategory,
  productCategories,
} from '@/entities/product'
import { popularProducts } from './constants'
import { useRef, useState } from 'react'
import { PlayTriangle } from '@/shared/components/svgs'

export const PopularProducts = () => {
  const categoriesListRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>('rest and leisure')

  const CategoryButton = (category: ProductCategory) => {
    return (
      <Button
        theme={category === activeCategory ? 'dark' : 'not-active'}
        onClick={() => setActiveCategory(category)}
        key={category}
      >
        {productCattegoryMap[category]}
      </Button>
    )
  }

  const filteredPopularProducts = popularProducts.filter(
    (product) => product.category === activeCategory
  )

  const openCategorySelect = () => {
    if (!categoriesListRef.current) return
    const dispaly = categoriesListRef.current?.style.display
    categoriesListRef.current.style.display =
      dispaly === 'block' ? 'none' : 'block'
  }

  const setMobileActiveCategory = (category: ProductCategory) => {
    setActiveCategory(category)
    openCategorySelect()
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Популярные товары</h2>

      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.categories}>
            {productCategories.map((productCategory) =>
              CategoryButton(productCategory)
            )}
          </div>

          <div className={styles.categories__mobile}>
            <Button
              theme="dark"
              onClick={() => openCategorySelect()}
              className={styles.mobileActiveCategory}
            >
              {productCattegoryMap[activeCategory]}{' '}
              <PlayTriangle
                width={11}
                className={styles.mobileActiveCategory__svg}
              />
            </Button>
            <div ref={categoriesListRef} className={styles.notActiveButtons}>
              {productCategories
                .filter((category) => category !== activeCategory)
                .map((notActiveCategory) => (
                  <Button
                    theme="not-active"
                    key={notActiveCategory}
                    onClick={() => setMobileActiveCategory(notActiveCategory)}
                  >
                    {productCattegoryMap[notActiveCategory]}
                  </Button>
                ))}
            </div>
          </div>

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
