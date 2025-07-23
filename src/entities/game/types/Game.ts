export type Game = {
  id: string
  name: string
  imageName?: string
}

export type Games = Array<GameRecord[keyof GameRecord]>
export type GameRecord = Record<Game['id'], Game>
