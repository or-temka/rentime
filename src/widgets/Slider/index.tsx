'use client'

import useEmblaCarousel from 'embla-carousel-react'
import styles from './index.module.scss'

export const Slider = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div className={styles.embla__slide} key={i}>
            Slide {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
