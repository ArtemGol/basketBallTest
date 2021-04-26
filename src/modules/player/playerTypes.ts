import {ErrorInterface} from "../globaltypes";

export interface PlayerInitialStateInterface {
    initialized: boolean
    error: ErrorInterface | null
    select: { value?: string, label?: string }[]
    search: string
    positions: string[]
    updatePlayer: PlayerInterFace | null,
    player: PlayerInterFace | null,
    players: PlayerInterFace[]
    playerCount: number
    currentPage: number
    pageSize: number
}

export interface PlayerInterFace {
    avatarUrl: string
    birthday: string
    height: number
    id: number
    name: string
    number: number
    position: string
    team: number
    teamName: string
    weight: number
}

export interface PlayersInterFace {
    count: number
    data: PlayerInterFace[]
    page: number
    size: number
}

export interface RootPlayerStateInterface {
    player: PlayerInitialStateInterface
}