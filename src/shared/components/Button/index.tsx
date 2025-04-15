import { ButtonProps } from './types'
import styles from './index.module.scss'

export const Button = ({
  children,
  theme = 'light',
  variant = 'filled',
  hoverAnimation = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={[
        styles.button,
        styles[`button_${variant}`],
        styles[`button__${theme}`],
        styles[`button__${theme}_${variant}`],
        hoverAnimation ? styles.button__hoverAnimation : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  )
}
