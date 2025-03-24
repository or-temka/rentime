import { ButtonProps } from './types'
import styles from './index.module.scss'

export const Button = ({
  children,
  theme = 'light',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={[styles.button, styles[`button__${theme}`], className].join(
        ' '
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
