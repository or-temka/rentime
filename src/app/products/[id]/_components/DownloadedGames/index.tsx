'use client'

import { Button } from '@/shared/components'
import { DownloadedGamesProps } from './types'
import { useState } from 'react'
import styles from './index.module.scss'

export const DownloadedGames = ({ games }: DownloadedGamesProps) => {
  const [show, setShow] = useState(false)

  return (
    <div className={styles.container}>
      <Button
        onClick={() => setShow((show) => !show)}
        className={styles.button}
      >
        {show ? 'Скрыть' : 'Показать'} полный список установленных игр
      </Button>
      {show && (
        <div className={styles.games}>
          {games.map((game, index) => (
            <span className={styles.game} key={game + index}>
              {game}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
