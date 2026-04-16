import { ReactNode } from 'react'

export type PageHeaderProps = {
  title?: {
    content: ReactNode
    metaText?: string
  }
  info?: {
    text: string
    buttons?: ReactNode
  }
  className?: string
  shadowClassName?: string
  style?: React.CSSProperties
}
