import {IError} from "../globaltypes";

export interface PlayerInitialStateInterface {
  initialized: boolean
  error: IError | null
  select: { value?: string, label?: string }[]
  search: string
  positions: string[]
  updatePlayer: IPlayer | null,
  player: IPlayer | null,
  players: IPlayer[]
  playerCount: number
  currentPage: number
  pageSize: number
}

export interface IPlayer {
  avatarUrl: string
  birthday: Date
  height: number
  id: number
  name: string
  number: number
  position: string
  team: number
  teamName: string
  weight: number
}

export interface IPlayers {
  count: number
  data: IPlayer[]
  page: number
  size: number
}

export interface RootPlayerStateInterface {
  player: PlayerInitialStateInterface
}