import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import pricePerDayStyles from './pricePerDay.module.scss'
import { ROUTES } from '@/config/routes'
import { PriceProps } from './types'

const PricePerDay = ({
  day,
  pricePerDay,
}: {
  day: number
  pricePerDay: number
}) => {
  const dayName = day === 1 ? '1 день' : day === 5 ? 'неделя' : `${day} дня`

  if (day > 5) return <></>

  return (
    <div className={pricePerDayStyles.container}>
      <div className={pricePerDayStyles.day}>
        <span className={pricePerDayStyles.day__text}>{dayName}</span>
      </div>
      <div className={pricePerDayStyles.content}>
        <div className={pricePerDayStyles.perDay}>
          <span className={pricePerDayStyles.perDay__text}>
            {pricePerDay} руб./сутки
          </span>
        </div>
        <div className={pricePerDayStyles.total}>
          <span className={pricePerDayStyles.total__text}>
            {pricePerDay * day} руб
          </span>
        </div>
      </div>
    </div>
  )
}

export const Price = ({ product }: PriceProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <H2>Стоимость</H2>
        <div className={styles.infoContent}>
          <p className={styles.paragraph}>
            Стоимость аренды рассчитывается в зависимости от количества дней,
            которые вы планируете использовать товар. Чем дольше аренда, тем
            выгоднее цена за день.
          </p>
          <div className={styles.additional}>
            <span className={styles.additional__text}>
              * Арендовать можно на любой срок (+1 день свыше недели /800 руб.)
            </span>
            <span className={styles.additional__text}>
              ** Доставка по всему городу: 100-600 рублей в зависимости от
              района (
              <a
                href={ROUTES.PAYMENT_AND_DELIVERY}
                className={styles.deliveryLink}
              >
                узнать цену доставки
              </a>
              )
            </span>
          </div>
        </div>
      </div>

      <div className={styles.prices}>
        {Object.entries(product.price.perDay).map(([key, value], index) => (
          <PricePerDay day={index + 1} pricePerDay={value} key={key} />
        ))}
      </div>
    </div>
  )
}
