export interface IPage<T> {
    data: T,
    count: number,
    page: number,
    size: number
}

export interface IGetPlayersRequest {
    playerName: string
    TeamIds?: { value?: string, label?: string }[]
    currentPage: number
    pageSize: number
}

export interface IAddPlayerRequest {
    name: string
    number: number
    position: string
    team: number
    birthday: Date
    height: number
    weight: number
    avatarUrl: FormData
}

export interface IUpdatePlayerRequest {
    name: string
    number: number
    position: string
    team: number
    birthday: Date
    height: number
    weight: number
    avatarUrl?: FormData
    id: number
    avatarUrlString?: string
}