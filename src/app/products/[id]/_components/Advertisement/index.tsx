import { ROUTES } from '@/config/routes'
import { RentButton, UnderlineSpan } from '@/shared/components'
import { TextsBackgound } from '@/widgets'
import Link from 'next/link'
import styles from './index.module.scss'

export const Advertisement = () => {
  return (
    <section className={styles.section}>
      <TextsBackgound />

      <div className={styles.content}>
        <span className={styles.slogan}>
          Арендуй. Пользуйся. Возвращай. Легко!
        </span>
        <div className={styles.rent}>
          <RentButton theme="dark" />
          <Link
            href={ROUTES.PAYMENT_AND_DELIVERY}
            className={styles.paymentAndDeliveryLink}
          >
            <UnderlineSpan>Оплата и доставка</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  )
}
