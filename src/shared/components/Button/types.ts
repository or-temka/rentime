import { Theme } from '@/shared/types'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonTheme = Theme | 'not-active'
export type ButtonVariant = 'filled' | 'outlined'

export type ButtonProps = {
  theme?: ButtonTheme
  variant?: ButtonVariant
  hoverAnimation?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
