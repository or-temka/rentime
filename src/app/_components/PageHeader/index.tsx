import { ContentHeader } from '@/shared/components/ContentHeader'
import styles from './index.module.scss'

export const PageHeader = () => {
  return (
    <ContentHeader className={styles.pageHeader}>
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>Аренда товаров в Ярославле</h1>
          <p className={styles.paragraph}>
            Зачем покупать, если можно взять напрокат?
          </p>
          <button>Арендовать</button>
        </div>

        <div className={styles.comments}>
          <span>Комментарии</span>
        </div>
      </div>
    </ContentHeader>
  )
}
