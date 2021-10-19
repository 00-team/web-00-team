import { JoinTeamModel, JoinTeamTypes } from '../models/JoinTeam'

interface LOADING_ACTION {
    type: JoinTeamTypes.JOINTEAM_LOADING
    payload: boolean
}

interface ERROR_ACTION {
    type: JoinTeamTypes.JOINTEAM_ERROR
    payload: string | null
}

interface LOADED_ACTION {
    type: JoinTeamTypes.JOINTEAM_LOADED
    payload: JoinTeamModel
}

export type Action = LOADING_ACTION | LOADED_ACTION | ERROR_ACTION
