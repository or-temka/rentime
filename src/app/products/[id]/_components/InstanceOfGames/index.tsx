import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { Slider } from '@/widgets'

const GameSlide = ({ imageUrlName }: { imageUrlName: string }) => {
  return (
    <img
      alt="image"
      src={`/images/games/${imageUrlName}`}
      className={styles.image}
    />
  )
}

const slides = [
  <GameSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <GameSlide key={1} imageUrlName="god-of-war.webp" />,
  <GameSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <GameSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
  <GameSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <GameSlide key={1} imageUrlName="god-of-war-ragnarok.jpg" />,
  <GameSlide key={1} imageUrlName="uncharted-4.jpg" />,
  <GameSlide key={1} imageUrlName="god-of-war-ragnarok.jpg" />,
  <GameSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <GameSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
  <GameSlide key={1} imageUrlName="resident-evil-village.jpg" />,
  <GameSlide key={1} imageUrlName="spider-man-miles-morales.jpg" />,
]

export const InstanceOfGames = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <H2 className={styles.title}>Пример доступных игр</H2>
        <p className={styles.paragraph}>
          Всего игр более 500. Если вам нужна определенная игра и вы не увидели
          ее в этом списке, напишите нам для уточнения наличия игры в подписке.
        </p>
      </div>

      <div className={styles.carouselContainer}>
        <Slider
          visibleSlidesCount={5}
          scrollSlidesCount={3}
          slides={slides}
          classNames={{
            emblaSlide: styles.slide,
            dots: styles.dots,
            emblaContainer: styles.emblaContainer,
            sliderWrapper: styles.sliderWrapper,
          }}
        />
      </div>
    </section>
  )
}
