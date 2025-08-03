import { ROUTES } from '@/config/routes'
import { PRODUCT_IMAGE_ROOT_ROUTE, PRODUCTS } from '@/entities/product'
import { RentButton } from '@/shared/components'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'
import { TextsBackgound } from '@/widgets'
import { PLAYSTATION5 } from '@/entities/product/constants/products/playstation5'

const SHOW_DETAILS_LINK = ROUTES.PRODUCTS.PRODUCT('playstation5')
const SHOW_DETAILS_TEXT = 'Посмотреть детали'

export const ProductStand = () => {
  return (
    <section className={styles.container}>
      <TextsBackgound />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.label}>Playstation 5</h2>
          <p className={styles.description}>
            Мощная игровая консоль нового поколения с невероятной графикой,
            быстрой загрузкой и полным погружением в игровой процесс
          </p>
          <Link
            href={SHOW_DETAILS_LINK}
            className={[styles.link, styles.link__header].join(' ')}
          >
            {SHOW_DETAILS_TEXT}
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
            href={SHOW_DETAILS_LINK}
            className={[styles.link, styles.link__interaction].join(' ')}
          >
            {SHOW_DETAILS_TEXT}
          </Link>
          <strong className={styles.price}>
            от {PLAYSTATION5.price.weekends.twoMonths} руб. за день
          </strong>
          <RentButton
            theme="dark"
            href={PRODUCTS.playstation5.links?.avito}
            target="_blank"
          />
        </div>
      </div>
    </section>
  )
}
