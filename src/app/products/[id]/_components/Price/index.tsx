import { H2 } from '@/shared/components'
import styles from './index.module.scss'
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
    <div>
      <div>
        <span>{dayName}</span>
      </div>
      <div>
        <div>
          <span>{pricePerDay} руб./сутки</span>
        </div>
        <div>
          <span>{pricePerDay * day} руб</span>
        </div>
      </div>
    </div>
  )
}

export const Price = ({ product }: PriceProps) => {
  return (
    <div>
      <div>
        <H2>Стоимость</H2>
        <div>
          <p>
            Стоимость аренды рассчитывается в зависимости от количества дней,
            которые вы планируете использовать товар. Чем дольше аренда, тем
            выгоднее цена за день.
          </p>
          <div>
            <span>
              * Арендовать можно на любой срок (+1 день свыше недели /800 руб.)
            </span>
            <span>
              ** Доставка по всему городу: 100-600 рублей в зависимости от
              района (
              <a href={ROUTES.PAYMENT_AND_DELIVERY}>узнать цену доставки</a>)
            </span>
          </div>
        </div>
      </div>

      <div>
        {Object.entries(product.price.perDay).map(([key, value], index) => (
          <PricePerDay day={index + 1} pricePerDay={value} key={key} />
        ))}
      </div>
    </div>
  )
}
