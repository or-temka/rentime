import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonTheme = 'light' | 'dark' | 'not-active'

export type ButtonProps = {
  theme?: ButtonTheme
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
