import { AppModel, AppTypes } from '../models/App'
import { Action } from '../action-types/app'

const initState: AppModel = {
    winwid: 0, // window width
}

export default function (state = initState, action: Action): AppModel {
    switch (action.type) {
        case AppTypes.SET_WINWID:
            return {
                ...state,
                winwid: action.payload,
            }
        default:
            return state
    }
}
