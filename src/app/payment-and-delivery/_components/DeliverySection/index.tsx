import { ROUTES } from '@/config/routes'
import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { questionsAnswers } from './constants'
import { AttentionBlock, Questions } from '@/widgets'
import { BLOCKS_IDS } from '../../constants'

export const DeliverySection = () => {
  return (
    <article className={styles.article}>
      <div className={styles.main}>
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
              <a target="_blank" href={ROUTES.CONTACTS.BASE}>
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

        <AttentionBlock text="Обязательно уточняйте наличие оборудования перед арендой!" />

        <div className={styles.mapSection} id={BLOCKS_IDS.deliveryPriceMap}>
          <H2>Карта с ценой доставки</H2>

          <p>
            Выберите область или найдите свой адрес, а после нажмите на данную
            область, чтобы увидеть цену:
          </p>

          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c4944bbf1a9773180a7f197bb2031171183e3102db7ec28ee8af7e5773db122&amp;source=constructor"
            frameBorder="0"
            className={styles.map}
          ></iframe>
        </div>
      </div>

      <Questions questions={questionsAnswers} />
    </article>
  )
}
