import { THEME_COLOR } from '@/shared/constants'
import { Theme } from '@/shared/types'

type RightArrowSVGProps = {
  theme?: Theme
} & React.SVGProps<SVGSVGElement>

export const RightArrowSVG = ({
  theme = 'light',
  ...rest
}: RightArrowSVGProps) => {
  return (
    <svg
      viewBox="0 0 21 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...rest}
    >
      <path
        d="M20.6504 4.12772C20.8457 3.93246 20.8457 3.61588 20.6504 3.42061L17.4684 0.238634C17.2732 0.0433723 16.9566 0.0433723 16.7613 0.238635C16.5661 0.433897 16.5661 0.750479 16.7613 0.945741L19.5898 3.77417L16.7613 6.6026C16.5661 6.79786 16.5661 7.11444 16.7613 7.3097C16.9566 7.50496 17.2732 7.50496 17.4684 7.3097L20.6504 4.12772ZM4.37114e-08 4.27417L20.2969 4.27417L20.2969 3.27417L-4.37114e-08 3.27417L4.37114e-08 4.27417Z"
        fill={theme === 'light' ? THEME_COLOR.dark : THEME_COLOR.light}
      />
    </svg>
  )
}
