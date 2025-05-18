/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss'
import { MediaCardSlideProps } from './types'

export const MediaCardSlide = ({ imageUrl }: MediaCardSlideProps) => {
  return <img alt="image" src={imageUrl} className={styles.image} />
}
