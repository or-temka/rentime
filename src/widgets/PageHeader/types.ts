import { ReactNode } from 'react'

export type PageHeaderProps = {
  title?: ReactNode
  info?: {
    text: string
    button: ReactNode
  }
  className?: string
  shadowClassName?: string
}
