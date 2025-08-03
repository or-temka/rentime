import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { PriceProps } from './types'
import { getRubleWord } from '@/shared/utils'

const getDayName = (day: number, type: 'weekdays' | 'weekends') => {
  const isWeekdays = type === 'weekdays'
  switch (day) {
    case 1:
      return '1 день'
    case 4:
      return isWeekdays ? '4 дня' : 'от 4 дней'
    case 5:
      return isWeekdays ? '5 дней' : 'от 14 дней'
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
  type,
}: {
  day: number
  pricePerDay: number
  type: 'weekdays' | 'weekends'
}) => {
  if (day > 7) return <></>

  const isWeekdays = type === 'weekends'
  const showFromPriceLabel = isWeekdays && day > 3

  let totalPrice = pricePerDay * day
  if (isWeekdays) {
    totalPrice =
      day < 5
        ? pricePerDay * day
        : day === 6
        ? pricePerDay * 30
        : day === 5
        ? pricePerDay * 14
        : pricePerDay * 60
  }

  return (
    <tr>
      <td>{getDayName(day, type)}</td>
      <td>
        {pricePerDay}
        <span className="visually-hidden"> {getRubleWord(totalPrice)}</span>
      </td>
      <td>
        {showFromPriceLabel ? (
          <span className={styles.pricesTable__fromPriceText}>от </span>
        ) : (
          ''
        )}
        {totalPrice}
        <span className="visually-hidden"> {getRubleWord(totalPrice)}</span>
      </td>
    </tr>
  )
}

export const Price = ({ product }: PriceProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <H2 className="visually-hidden">Стоимость</H2>
        <div className={styles.infoContent}>
          <p className={styles.paragraph}>
            Стоимость аренды рассчитывается в зависимости от количества дней,
            которые вы планируете использовать товар. Чем дольше аренда, тем
            выгоднее цена за день.
          </p>
          <div className={styles.additional}>
            <span className={styles.additional__text}>
              Доставка по всему городу: 100-600 рублей в зависимости от района (
              <a
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.deliveryLink}
                target="_blank"
              >
                узнать цену доставки на карте
              </a>
              )
            </span>
          </div>
        </div>
      </div>

      <div className={styles.pricesContainer}>
        <section className={styles.prices}>
          <h3 className="visually-hidden">Стоимость аренды в будние дни</h3>
          <div className={styles.pricesLabel}>
            <span className={styles.pricesLabel__text}>Будние дни</span>
          </div>
          <table className={styles.pricesTable}>
            <thead>
              <tr>
                <th>Кол-во дней</th>
                <th>Стоимость за сутки, руб.</th>
                <th>Итог, руб.</th>
              </tr>
            </thead>
            <tbody className={styles.pricesTableTbody}>
              {Object.entries(product.price.weekdays).map(
                ([key, value], index) => (
                  <PricePerDay
                    day={index + 1}
                    pricePerDay={value}
                    type="weekdays"
                    key={key}
                  />
                )
              )}
            </tbody>
          </table>
        </section>

        <section className={styles.prices}>
          <h3 className="visually-hidden">
            Стоимость аренды в выходные и праздничные дни
          </h3>
          <div className={styles.pricesLabel}>
            <span className={styles.pricesLabel__text}>
              Выходные и праздничные
            </span>
          </div>
          <table className={styles.pricesTable}>
            <thead>
              <tr>
                <th>Кол-во дней</th>
                <th>Стоимость за сутки, руб.</th>
                <th>Итог, руб.</th>
              </tr>
            </thead>
            <tbody className={styles.pricesTableTbody}>
              {Object.entries(product.price.weekends).map(
                ([key, value], index) => (
                  <PricePerDay
                    day={index + 1}
                    pricePerDay={value}
                    type="weekends"
                    key={key}
                  />
                )
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
