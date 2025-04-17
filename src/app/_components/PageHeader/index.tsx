import styles from './index.module.scss'
import { Button, ContentHeader } from '@/shared/components'

export const PageHeader = () => {
  return (
    <ContentHeader className={styles.pageHeader}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Аренда товаров <br /> в Ярославле
        </h1>
        <div className={styles.splitLine} />
        <div className={styles.info}>
          <p className={styles.paragraph}>
            Зачем покупать, если можно взять напрокат?
          </p>
          <Button theme="light">Арендовать</Button>
        </div>
      </div>
    </ContentHeader>
  )
}
