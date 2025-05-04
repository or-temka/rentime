import { ROUTES } from '@/config/routes'
import { H2 } from '@/shared/components'
import styles from './index.module.scss'

export const DeliverySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.deliveryInfo}>
        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>В пределах города</h3>
          <span className={styles.infoBlock__text}>
            Цена доставки и забора (забрать оборудование после аренды) в
            пределах города указана на интерактивной карте. Цена для доставки
            всегда равняется цене забора.
          </span>
        </div>

        <div className={styles.infoBlock}>
          <h3 className={styles.infoBlock__title}>За городом</h3>
          <span className={styles.infoBlock__text}>
            Цена доставки за город обсуждается индивидуально. Для уточнения{' '}
            <a target="_blank" href={ROUTES.CONTACTS}>
              напишите нам.
            </a>
          </span>
        </div>
      </div>

      <div className={styles.additional}>
        <p className={styles.additional__paragraph}>
          Цена доставки на некоторые товары, к примеру, габаритные,
          рассчитывается индивидуально. У таких товаров в карточке указано
          &quot;Индивидуальная цена доставки&quot;
        </p>
      </div>

      <div className={styles.mapSection}>
        <H2>Карта с ценой доставки</H2>

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c4944bbf1a9773180a7f197bb2031171183e3102db7ec28ee8af7e5773db122&amp;source=constructor"
          frameBorder="0"
          className={styles.map}
        ></iframe>
      </div>
    </section>
  )
}
