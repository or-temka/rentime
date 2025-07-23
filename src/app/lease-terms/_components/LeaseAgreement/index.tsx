import { DocumentSVG } from '@/shared/components'
import styles from './index.module.scss'
import { BLOCKS_IDS } from '../../constants'

export const LeaseAgreement = () => {
  return (
    <a
      href="/files/documents/пример договора.pdf"
      target="_blank"
      className={styles.container}
      id={BLOCKS_IDS.leaseAgreement}
    >
      <div className={styles.iconContainer}>
        <DocumentSVG className={styles.icon} />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Пример договора.pdf</span>
        <div className={styles.info}>
          <span>PDF</span>
          <div className={styles.circle} />
          <span>115KB</span>
        </div>
      </div>
    </a>
  )
}
