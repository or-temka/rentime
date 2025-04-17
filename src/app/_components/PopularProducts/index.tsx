import Link from 'next/link'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { Button } from '@/shared/components'
import { ProductCard } from '@/entities/product'

export const PopularProducts = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Популярные товары</h2>

      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.categories}>
            <Button theme="dark">Отдых и досуг</Button>
            <Button theme="dark">Для дома</Button>
            <Button theme="dark">Туризм</Button>
          </div>
          <Link href={ROUTES.HOME} className={styles.showAllLink}>
            Посмотреть все
          </Link>
        </div>

        <div className={styles.content}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  )
}
