import { RuleProps } from './types'
import styles from './rule.module.scss'

export const Rule = ({ title, children, id }: RuleProps) => {
  return (
    <article className={styles.rule} id={id}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </article>
  )
}
