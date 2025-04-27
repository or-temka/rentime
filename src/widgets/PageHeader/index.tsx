import styles from './index.module.scss'
import { ContentHeader } from '@/shared/components'
import { PageHeaderProps } from './types'

export const PageHeader = ({
  title,
  info,
  className,
  shadowClassName,
}: PageHeaderProps) => {
  return (
    <ContentHeader className={className} shadowClassName={shadowClassName}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {info && (
          <>
            <div className={styles.splitLine} />
            <div className={styles.info}>
              <p className={styles.paragraph}>{info.text}</p>
              {info.button}
            </div>
          </>
        )}
      </div>
    </ContentHeader>
  )
}
