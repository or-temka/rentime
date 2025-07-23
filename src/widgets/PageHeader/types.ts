import { ReactNode } from 'react'

export type PageHeaderProps = {
  title?: {
    content: ReactNode
    metaText?: string
  }
  info?: {
    text: string
    button?: ReactNode
  }
  className?: string
  shadowClassName?: string
  style?: React.CSSProperties
}
