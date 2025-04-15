import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonTheme = 'light' | 'dark' | 'not-active'
export type ButtonVariant = 'filled' | 'outlined'

export type ButtonProps = {
  theme?: ButtonTheme
  variant?: ButtonVariant
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
