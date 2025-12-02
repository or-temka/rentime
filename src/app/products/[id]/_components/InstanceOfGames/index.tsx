import { H2 } from '@/shared/components'
import styles from './index.module.scss'
import { MediaCardSlider, MediaCardSliderProps } from '@/widgets'
import { InstanceOfGamesProps } from './types'
import Image from 'next/image'
import { DownloadedGames } from '../DownloadedGames'

export const InstanceOfGames = ({ product }: InstanceOfGamesProps) => {
  const games = product.games

  if (!games || !games.available) {
    return <></>
  }

  const items: MediaCardSliderProps['items'] = games.available.map((game) => ({
    title: game.name,
    imageUrl: `/images/games/${game.imageName}`,
  }))

  const productMarkup = product.markup

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
        {productMarkup?.listOfGames?.desc && (
          <p className={styles.paragraph}>{productMarkup?.listOfGames?.desc}</p>
        )}
      </div>

      <div className={styles.sliderContainer}>
        <MediaCardSlider items={items} />
      </div>

      {games.downloaded && (
        <div className={styles.downloaded}>
          <DownloadedGames games={games.downloaded} />
        </div>
      )}
    </section>
  )
}
