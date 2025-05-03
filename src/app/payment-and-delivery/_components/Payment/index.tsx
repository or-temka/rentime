import styles from './index.module.scss'

export const Payment = () => {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наличный расчёт</h2>
        <p className={styles.paragraph}>
          - Оплата производится наличными при получении товара или оказании
          услуги.
        </p>
        <p className={styles.paragraph}>
          - Вместе с заказом вы получаете все необходимые документы, включая
          кассовый чек.
        </p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Безналичный расчёт</h2>
        <p className={styles.paragraph}>
          - Оплата осуществляется путем перечисления денежных средств с
          расчетного счета покупателя на расчетный счет арендодателя. Реквизиты
          для перевода предоставляются после оформления заказа.
        </p>
        <p className={styles.paragraph}>
          - Вместе с заказом вы получаете все необходимые документы, включая
          кассовый чек.
        </p>
      </div>
    </article>
  )
}
