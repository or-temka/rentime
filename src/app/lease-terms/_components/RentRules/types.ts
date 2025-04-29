import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from 'react'

export type RuleProps = {
  title: string
  children: ReactNode
}

export type UlLiProps = {} & DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
