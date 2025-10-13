'use client'

import { Button, Modal } from '@/shared/components'
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
        Показать полный список установленных игр
      </Button>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        size="lg"
        title="Полный список установленных игр"
      >
        <div className={styles.games}>
          {games.map((game, index) => (
            <span className={styles.game} key={game + index}>
              {game}
            </span>
          ))}
        </div>
      </Modal>
    </div>
  )
}
