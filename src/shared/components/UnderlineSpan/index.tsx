import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './index.module.scss'

type UnderlineSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export const UnderlineSpan = ({ children, ...rest }: UnderlineSpanProps) => {
  return (
    <div className={styles.container}>
      <span {...rest}>{children}</span>
      <div className={styles.underline} />
    </div>
  )
}
