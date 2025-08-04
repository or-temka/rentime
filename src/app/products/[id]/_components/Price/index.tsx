import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import pricePerDayStyles from './pricePerDay.module.scss'
import { ROUTES } from '@/config/routes'
import { PriceProps } from './types'

const getDayName = (day: number) => {
  switch (day) {
    case 1:
      return '1 день'
    case 4:
      return 'от 4 дней'
    case 5:
      return 'от 14 дней'
    case 6:
      return '1 месяц'
    case 7:
      return '2 месяца'
    default:
      return `${day} дня`
  }
}

const PricePerDay = ({
  day,
  pricePerDay,
}: {
  day: number
  pricePerDay: number
}) => {
  if (day > 7) return <></>

  const totalPrice =
    day < 5
      ? pricePerDay * day
      : day === 6
      ? pricePerDay * 30
      : day === 5
      ? pricePerDay * 14
      : pricePerDay * 60

  return (
    <div className={pricePerDayStyles.container}>
      <div className={pricePerDayStyles.day}>
        <span className={pricePerDayStyles.day__text}>{getDayName(day)}</span>
      </div>
      <div className={pricePerDayStyles.content}>
        <div className={pricePerDayStyles.perDay}>
          <span className={pricePerDayStyles.perDay__text}>
            {pricePerDay} руб./сутки
          </span>
        </div>
        <div className={pricePerDayStyles.total}>
          <span className={pricePerDayStyles.total__text}>
            {day > 3 ? 'от ' : ''}
            {totalPrice} руб
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
        <H2 className={styles.title}>Стоимость</H2>
        <div className={styles.infoContent}>
          <p className={styles.paragraph}>
            Стоимость аренды рассчитывается в зависимости от количества дней,
            которые вы планируете использовать товар. Чем дольше аренда, тем
            выгоднее цена за день.
          </p>
          <div className={styles.additional}>
            <span className={styles.additional__text}>
              * Доставка по всему городу: 100-600 рублей в зависимости от района
              (
              <a
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.deliveryLink}
              >
                узнать цену доставки на карте
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
