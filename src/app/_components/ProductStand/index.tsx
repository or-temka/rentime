import { ROUTES } from '@/config/routes'
import { PRODUCT_IMAGE_ROOT_ROUTE } from '@/entities/product'
import { RentButton } from '@/shared/components'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

export const ProductStand = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <span className={styles.backgroundText}>Rentime</span>
        <span className={styles.backgroundText}>Rentime</span>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.label}>Playstation 5</h2>
          <p className={styles.description}>
            Мощная игровая консоль нового поколения с невероятной графикой,
            быстрой загрузкой и полным погружением в игровой процесс
          </p>
          <Link
            href={ROUTES.HOME}
            className={[styles.link, styles.link__header].join(' ')}
          >
            Посмотреть детали
          </Link>
        </div>

        <div className={styles.imageContainer}>
          <Image
            alt="playstation 5"
            src={`${PRODUCT_IMAGE_ROOT_ROUTE}playstation5/playstation5_transparent_background.png`}
            width={882}
            height={661}
            className={styles.image}
          />
        </div>

        <div className={styles.interaction}>
          <Link
            href={ROUTES.HOME}
            className={[styles.link, styles.link__interaction].join(' ')}
          >
            Посмотреть детали
          </Link>
          <strong className={styles.price}>от 1100 руб</strong>
          <RentButton theme="dark" />
        </div>
      </div>
    </section>
  )
}
