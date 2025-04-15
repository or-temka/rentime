import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonTheme = 'light' | 'dark' | 'not-active'
export type ButtonVariant = 'filled' | 'outlined'

export type ButtonProps = {
  theme?: ButtonTheme
  variant?: ButtonVariant
  hoverAnimation?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
