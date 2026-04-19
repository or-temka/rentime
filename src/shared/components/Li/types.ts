import { DetailedHTMLProps, LiHTMLAttributes } from 'react'

export type LiProps = { usePoint?: boolean } & DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
