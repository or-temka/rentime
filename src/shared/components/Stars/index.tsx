import { Star } from '../Star'
import { StarsProps } from './types'
import styles from './index.module.scss'

export const Stars = ({
  rating = 0,
  starWidth,
  starHegith,
  classNames,
}: StarsProps) => {
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
        className={classNames?.star}
      />
    )
  })

  return (
    <div className={[styles.container, classNames?.container].join(' ')}>
      {stars}
    </div>
  )
}
