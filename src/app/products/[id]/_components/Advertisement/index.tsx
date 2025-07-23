import { ROUTES } from '@/config/routes'
import { RentButton, UnderlineSpan } from '@/shared/components'
import { TextsBackgound } from '@/widgets'
import Link from 'next/link'
import styles from './index.module.scss'
import { AdvertisementProps } from './types'

export const Advertisement = ({ product }: AdvertisementProps) => {
  return (
    <section className={styles.section}>
      <TextsBackgound
        text="rentime"
        classNames={{ container: styles.background }}
      />

      <div className={styles.content}>
        <span className={styles.slogan}>
          Арендуй. Пользуйся. Возвращай. Легко!
        </span>
        <div className={styles.rent}>
          <a href={product.links?.avito} target="_blank">
            <RentButton theme="dark" href="" />
          </a>
          <Link
            href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
            className={styles.paymentAndDeliveryLink}
          >
            <UnderlineSpan>Оплата и доставка</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  )
}
