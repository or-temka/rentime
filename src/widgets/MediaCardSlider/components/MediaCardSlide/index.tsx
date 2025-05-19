import Image from 'next/image'
import styles from './index.module.scss'
import { MediaCardSlideProps } from './types'

export const MediaCardSlide = ({ item }: MediaCardSlideProps) => {
  return (
    <div className={styles.container}>
      <Image
        alt={`Игра ${item.title}`}
        src={item.imageUrl}
        className={[
          styles.image,
          item.title ? styles.image__withTitle : '',
        ].join(' ')}
        width={340}
        height={426}
      />
      {item.title && (
        <div className={styles.hover}>
          <span className={styles.title}>{item.title}</span>
        </div>
      )}
    </div>
  )
}
