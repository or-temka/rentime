/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss'
import { MediaCardSlideProps } from './types'

export const MediaCardSlide = ({ item }: MediaCardSlideProps) => {
  return (
    <div className={styles.container}>
      <img
        alt="image"
        src={item.imageUrl}
        className={[
          styles.image,
          item.title ? styles.image__withTitle : '',
        ].join(' ')}
      />
      {item.title && (
        <div className={styles.hover}>
          <span className={styles.title}>{item.title}</span>
        </div>
      )}
    </div>
  )
}
