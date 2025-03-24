import styles from './index.module.scss'
import { Button, ContentHeader } from '@/shared/components'

export const PageHeader = () => {
  return (
    <ContentHeader className={styles.pageHeader}>
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>Аренда товаров в Ярославле</h1>
          <p className={styles.paragraph}>
            Зачем покупать, если можно взять напрокат?
          </p>
          <Button theme="light">
            Арендовать
          </Button>
        </div>

        <div className={styles.comments}>
          <span>Комментарии</span>
        </div>
      </div>
    </ContentHeader>
  )
}
