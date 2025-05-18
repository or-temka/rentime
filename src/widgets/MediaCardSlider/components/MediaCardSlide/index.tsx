import styles from './index.module.scss'

export const MediaCardSlide = ({ imageUrlName }: { imageUrlName: string }) => {
  return (
    <img
      alt="image"
      src={`/images/games/${imageUrlName}`}
      className={styles.image}
    />
  )
}
