export interface JoinTeamModel {
    id: string
    title: string
    description: string
    skills: string[]
    goodToHave: string[]
    needlessToSay: string[]
}

export interface JoinTeam {
    loading: boolean
    joinTeam: JoinTeamModel | null
    error: string | null
}

export enum JoinTeamTypes {
    JOINTEAM_LOADING = 'JOINTEAM_LOADING',
    JOINTEAM_ERROR = 'JOINTEAM_ERROR',
    JOINTEAM_LOADED = 'JOINTEAM_LOADED',
}
