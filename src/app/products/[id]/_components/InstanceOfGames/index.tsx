import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { MediaCardSlider, MediaCardSliderProps } from '@/widgets'
import { InstanceOfGamesProps } from './types'
import Image from 'next/image'

export const InstanceOfGames = ({ games }: InstanceOfGamesProps) => {
  const items: MediaCardSliderProps['items'] = games.map((game) => ({
    title: game.name,
    imageUrl: `/images/games/${game.imageName}`,
  }))

  return (
    <section className={styles.section}>
      <Image
        className={styles.background}
        alt="Человек играет в арендованную в rentime приставку"
        src={'/images/backgrounds/instance-of-games-background-1.jpg'}
        width={1603}
        height={911}
        priority={false}
      />

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
