import { Questions } from '@/widgets'
import styles from './index.module.scss'
import { questionsAnswers } from './constants'

export const PaymentSection = () => {
  return (
    <article className={styles.article}>
      <div className={styles.paymentMethods}>
        <div className={styles.container}>
          <h2 className={styles.title}>Наличный расчёт</h2>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              - Оплата производится наличными при получении товара или оказании
              услуги.
            </p>
            <p className={styles.paragraph}>
              - Вместе с заказом вы получаете все необходимые документы, включая
              кассовый чек.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>Безналичный расчёт</h2>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              - Оплата осуществляется путем перечисления денежных средств с
              расчетного счета покупателя на расчетный счет арендодателя.
              Реквизиты для перевода предоставляются после оформления заказа.
            </p>
            <p className={styles.paragraph}>
              - Вместе с заказом вы получаете все необходимые документы, включая
              кассовый чек.
            </p>
          </div>
        </div>
      </div>

      <Questions questions={questionsAnswers} />
    </article>
  )
}
