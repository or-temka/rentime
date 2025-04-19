import { Star } from '../Star'
import { StarsProps } from './types'

export const Stars = ({ rating = 0, starWidth, starHegith }: StarsProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1
    let fillPercentage = 0

    if (rating >= starValue) {
      fillPercentage = 100
    } else if (rating + 1 > starValue) {
      fillPercentage = (rating - i) * 100
    }

    return (
      <Star
        key={i}
        fillPercentage={Math.round(fillPercentage)}
        width={starWidth}
        height={starHegith}
      />
    )
  })

  return <div style={{ display: 'flex', gap: 4 }}>{stars}</div>
}
