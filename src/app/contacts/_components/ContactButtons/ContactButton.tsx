import styles from './ContactButton.module.scss'
import { ContactButtonProps } from './types'

export const ContactButton = ({
  children,
  icon,
  href,
  ...rest
}: ContactButtonProps) => {
  return (
    <a target="_blank" href={href}>
      <div className={styles.button} {...rest}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </a>
  )
}
