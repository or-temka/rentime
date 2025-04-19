import { useId } from 'react'
import { StarProps } from './types'

export const Star = ({
  fillPercentage = 100,
  width = 18,
  height = 16,
}: StarProps) => {
  const clipWidth = (fillPercentage / 100) * width
  
  const starId = useId()

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={`clip-${starId}`}>
          <rect x="0" y="0" width={clipWidth} height={height} />
        </clipPath>
      </defs>

      <path
        d="M9 0.27417L11.0206 6.14753L17.5595 6.14753L12.2694 9.77746L14.2901 15.6508L9 12.0209L3.70993 15.6508L5.73056 9.77746L0.440492 6.14753L6.97937 6.14753L9 0.27417Z"
        fill="#ccc"
      />

      <path
        d="M9 0.27417L11.0206 6.14753L17.5595 6.14753L12.2694 9.77746L14.2901 15.6508L9 12.0209L3.70993 15.6508L5.73056 9.77746L0.440492 6.14753L6.97937 6.14753L9 0.27417Z"
        fill="gold"
        clipPath={`url(#clip-${starId})`}
      />
    </svg>
  )
}
