import Image from 'next/image'
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
            Зачем покупать, если можно арендовать?
          </p>
          <Button theme="light" className={styles.rentButton}>
            <span className={styles.rentButton__text}>Арендовать</span>
            <Image
              src={'/svg/arrow1.svg'}
              alt="f"
              width={20}
              height={10}
              className={styles.rentButton__arrow}
            />
          </Button>
        </div>
      </div>
    </ContentHeader>
  )
}
