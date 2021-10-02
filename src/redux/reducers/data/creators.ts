import { CreatorsTypes, CreatorsModel } from '../../models/Creators'

const initState: CreatorsModel = {
    loading: false,
    creators: [],
    error: null,
}

export default function (
    state = initState,
    action: { type: CreatorsTypes; payload: unknown }
) {
    switch (action.type) {
        case CreatorsTypes.CREATORS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case CreatorsTypes.CREATORS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CreatorsTypes.CREATORS_LOADED:
            return {
                ...state,
                creators: action.payload,
            }
        default:
            return state
    }
}
