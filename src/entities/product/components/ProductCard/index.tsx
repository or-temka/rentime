import { ProductCardProps } from './types'
import styles from './index.module.scss'
import Image from 'next/image'
import { Stars } from '@/shared/components'
import Link from 'next/link'
import { ROUTES } from '@/config/routes'

export const ProductCard = ({
  id,
  name,
  imageURL,
  rating,
  feedbackCount,
  classNames,
}: ProductCardProps) => {
  const productRoute = ROUTES.PRODUCTS.PRODUCT(id)

  return (
    <div className={[styles.container, classNames?.container].join(' ')}>
      <Link href={productRoute} className={styles.imageContainer}>
        <Image
          src={imageURL}
          alt={name}
          width={527}
          height={302}
          className={styles.image}
        />
      </Link>
      <div className={[styles.content, classNames?.content].join(' ')}>
        <Link href={productRoute} className={styles.goArrow}></Link>
        <div className={styles.hoverCircle} />
        <div className={styles.info}>
          <h4 className={styles.name}>
            <Link href={productRoute} className={styles.name__link}>
              {name}
            </Link>
          </h4>
          <div className={styles.reviews}>
            <Stars
              rating={rating}
              classNames={{
                star: styles.star,
                container: styles.starContainer,
              }}
            />
            <span className={styles.feedbackCount}>
              отзывов: {feedbackCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export type * from './types'
