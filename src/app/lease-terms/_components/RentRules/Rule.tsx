import { RuleProps } from './types'
import styles from './rule.module.scss'

export const Rule = ({ title, children }: RuleProps) => {
  return (
    <article className={styles.rule}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </article>
  )
}
