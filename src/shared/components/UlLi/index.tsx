import { UlLiProps } from './types'
import styles from './index.module.scss'

export const UlLi = ({ children, className, ...rest }: UlLiProps) => {
  return (
    <li {...rest} className={[styles.li, className].join(' ')}>
      {children}
    </li>
  )
}
