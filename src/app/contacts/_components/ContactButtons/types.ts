import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export type ContactButtonProps = {
  icon: ReactNode
  href?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
