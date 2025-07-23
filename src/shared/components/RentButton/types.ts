import { Theme } from '@/shared/types'
import { ButtonProps } from '../Button/types'

export type RentButtonProps = {
  href?: string
  theme?: Theme
  target?: React.HTMLAttributeAnchorTarget
} & ButtonProps
