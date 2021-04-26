import {ErrorInterface} from "../globaltypes";

export interface TeamInitialStateInterface {
    initialized: boolean,
    error: ErrorInterface | null,
    search: string,
    updateTeam: TeamInterface | null,
    team: TeamInterface | null,
    teams: TeamInterface[],
    teamCount: number,
    currentPage: number,
    pageSize: number,
}

export interface TeamInterface {
    conference: string
    division: string
    foundationYear: number
    id: number
    imageUrl: string
    name: string
}

export interface TeamsInterface {
    count: number
    data: TeamInterface[]
    page: number
    size: number
}

export interface RootTeamStateInterface {
    team: TeamInitialStateInterface
}