import { AttentionSVG } from '@/shared/components'
import { AttentionBlockProps } from './types'
import styles from './index.module.scss'

export const AttentionBlock = ({ text }: AttentionBlockProps) => {
  return (
    <div className={styles.container}>
      <AttentionSVG className={styles.svg} />
      <span className={styles.text}>{text}</span>
    </div>
  )
}
