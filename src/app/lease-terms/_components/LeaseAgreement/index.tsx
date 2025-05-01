import { DocumentSVG } from '@/shared/components'
import styles from './index.module.scss'

export const LeaseAgreement = () => {
  return (
    <a
      href="/files/documents/пример договора.pdf"
      target="_blank"
      className={styles.container}
    >
      <div className={styles.iconContainer}>
        <DocumentSVG className={styles.icon} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Пример договора.pdf</span>
        <div className={styles.info}>
          <span className={styles.fileType}>PDF</span>
          <div className={styles.circle} />
          <span className={styles.fileWeight}>115KB</span>
        </div>
      </div>
    </a>
  )
}
