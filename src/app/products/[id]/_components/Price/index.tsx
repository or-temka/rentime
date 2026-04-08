import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { ROUTES } from '@/config/routes'
import { PriceProps } from './types'
import { getRubleWord } from '@/shared/utils'
import { dayKey, Product } from '@/entities/product'
import {
  DAILY_PRICE_MULTIPLIERS,
  DAY_NAMES,
} from '@/entities/product/constants'

const WEEKDAY_NOT_SHOW_DAYS_DEFAULT: dayKey[] = [
  '6',
  '7',
  '10',
  '14',
  '21',
  '30',
  '60',
]
const WEEKDAYS_WITH_FROM_LABEL: dayKey[] = []

const WEEKEND_NOT_SHOW_DAYS_DEFAULT: dayKey[] = ['5', '6', '7', '10', '21']
const WEEKENDS_WITH_FROM_LABEL: dayKey[] = ['4', '14']

const PricePerDay = ({
  day,
  pricePerDay,
  type,
  customHideDays,
}: {
  type: keyof Product['price']
  day: dayKey
  pricePerDay: number
  customHideDays?: dayKey[]
}) => {
  if (
    (type === 'weekdays' &&
      (customHideDays
        ? customHideDays
        : WEEKDAY_NOT_SHOW_DAYS_DEFAULT
      ).includes(day)) ||
    (type === 'weekends' &&
      (customHideDays
        ? customHideDays
        : WEEKEND_NOT_SHOW_DAYS_DEFAULT
      ).includes(day))
  )
    return <></>

  const showFromPriceLabel =
    type === 'weekdays'
      ? WEEKDAYS_WITH_FROM_LABEL.includes(day)
      : WEEKENDS_WITH_FROM_LABEL.includes(day)

  const totalPrice = pricePerDay * DAILY_PRICE_MULTIPLIERS[day]

  return (
    <tr>
      <td>
        {showFromPriceLabel ? DAY_NAMES[day].fromDays : DAY_NAMES[day].simple}
      </td>
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
          <h3 className="visually-hidden">
            {product.price.useOnlyWeekdaysPrice
              ? 'Стоимость аренды'
              : 'Стоимость аренды в будние дни'}
          </h3>
          <div className={styles.pricesLabel}>
            <span className={styles.pricesLabel__text}>
              {product.price.useOnlyWeekdaysPrice ? 'Стоимость' : 'Будние дни'}
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
              {(
                Object.entries(product.price.weekdays) as [dayKey, number][]
              ).map(([key, value]) => (
                <PricePerDay
                  day={key}
                  pricePerDay={value}
                  type="weekdays"
                  key={key}
                  customHideDays={product.price.weekdaysHideDays}
                />
              ))}
            </tbody>
          </table>
        </section>

        {!product.price.useOnlyWeekdaysPrice && (
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
                {(
                  Object.entries(product.price.weekends) as [dayKey, number][]
                ).map(([key, value]) => (
                  <PricePerDay
                    day={key}
                    pricePerDay={value}
                    type="weekends"
                    key={key}
                    customHideDays={product.price.weekendsHideDays}
                  />
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  )
}
