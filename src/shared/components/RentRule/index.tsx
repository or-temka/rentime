import { RentRuleProps } from './types'
import styles from './index.module.scss'

export const RentRule = ({ title, children, id }: RentRuleProps) => {
  return (
    <article className={styles.rule} id={id}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div>{children}</div>
    </article>
  )
}
