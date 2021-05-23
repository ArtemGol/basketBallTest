export interface IGetTeamsRequest {
  teamName: string
  currentPage: number
  pageSize: number
}

export interface IAddTeamRequest {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl: FormData
}

export interface IUpdateTeamRequest {
  name: string
  foundationYear: number
  division: string
  conference: string
  imageUrl?: FormData
  imageUrlString?: string
  id: number
}