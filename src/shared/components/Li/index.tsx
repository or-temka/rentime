import { LiProps } from './types'
import styles from './index.module.scss'

export const Li = ({
  children,
  className,
  usePoint = true,
  ...rest
}: LiProps) => {
  return (
    <li
      {...rest}
      className={[
        styles.li,
        `${usePoint ? styles.li__withPoint : ''}`,
        className,
      ].join(' ')}
    >
      {children}
    </li>
  )
}
