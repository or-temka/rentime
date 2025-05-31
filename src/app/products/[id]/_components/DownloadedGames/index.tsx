'use client'

import { Button } from '@/shared/components'
import { DownloadedGamesProps } from './types'
import { useState } from 'react'

export const DownloadedGames = ({ games }: DownloadedGamesProps) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Button onClick={() => setShow((show) => !show)}>
        Показать полный список установленных игр
      </Button>
      {show && (
        <div>
          {games.map((game) => (
            <span key={game.id}>{game.name}</span>
          ))}
        </div>
      )}
    </div>
  )
}
