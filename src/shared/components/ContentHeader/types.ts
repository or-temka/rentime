import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ContentHeaderProps = {
  children?: React.ReactNode
  shadowClassName?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
