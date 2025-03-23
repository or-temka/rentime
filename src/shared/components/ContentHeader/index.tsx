import styles from './index.module.scss'
import { ContentHeaderProps } from './types'

export const ContentHeader = ({
  children,
  className,
  shadowClassName,
  ...rest
}: ContentHeaderProps) => {
  return (
    <header {...rest} className={[styles.contentHeader, className].join(' ')}>
      <div className={[styles.containerWithShadow, shadowClassName].join(' ')}>
        {children}
      </div>
    </header>
  )
}
