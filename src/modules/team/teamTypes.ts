import {IError} from "../globaltypes";

export interface TeamInitialStateInterface {
    initialized: boolean,
    error: IError | null,
    search: string,
    updateTeam: ITeam | null,
    team: ITeam | null,
    teams: ITeam[],
    teamCount: number,
    currentPage: number,
    pageSize: number,
}

export interface ITeam {
    conference: string
    division: string
    foundationYear: number
    id: number
    imageUrl: string
    name: string
}

export interface ITeams {
    count: number
    data: ITeam[]
    page: number
    size: number
}

export interface RootTeamStateInterface {
    team: TeamInitialStateInterface
}