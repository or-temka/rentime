import styles from './index.module.scss'
import { H2Props } from './types'

export const H2 = ({ children, className, ...rest }: H2Props) => {
  return (
    <h2 className={[styles.h2, className].join(' ')} {...rest}>
      {children}
    </h2>
  )
}
