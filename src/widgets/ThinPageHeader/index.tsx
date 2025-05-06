import { PageHeader } from '../PageHeader'
import { PageHeaderProps } from '../PageHeader/types'
import styles from './index.module.scss'

export const ThinPageHeader = ({
  className,
  shadowClassName,
  title,
  info,
}: PageHeaderProps) => {
  return (
    <PageHeader
      title={title}
      info={info}
      className={[styles.pageHeader, className].join(' ')}
      shadowClassName={[styles.pageHeader__shadow, shadowClassName].join(' ')}
    />
  )
}
