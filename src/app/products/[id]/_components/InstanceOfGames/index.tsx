import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { MediaCardSlider, MediaCardSliderProps } from '@/widgets'

const BASE_GAME_CARD_IMAGE_PREFIX = '/images/games/'
const items: MediaCardSliderProps['items'] = [
  {
    imageUrl: `${BASE_GAME_CARD_IMAGE_PREFIX}god-of-war-ragnarok.jpg`,
    title: 'God of war: ragnarok',
  },
  { imageUrl: `${BASE_GAME_CARD_IMAGE_PREFIX}god-of-war-ragnarok.jpg` },
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

      <div className={styles.sliderContainer}>
        <MediaCardSlider items={items} />
      </div>
    </section>
  )
}
