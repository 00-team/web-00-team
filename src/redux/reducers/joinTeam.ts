import { JoinTeam, JoinTeamTypes } from '../models/JoinTeam'
import { Action } from '../action-types/joinTeam'

const initState: JoinTeam = {
    loading: false,
    joinTeam: null,
    error: null,
}

export default function (state = initState, action: Action): JoinTeam {
    switch (action.type) {
        case JoinTeamTypes.JOINTEAM_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case JoinTeamTypes.JOINTEAM_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case JoinTeamTypes.JOINTEAM_LOADED:
            return {
                ...state,
                joinTeam: action.payload,
            }
        default:
            return state
    }
}
