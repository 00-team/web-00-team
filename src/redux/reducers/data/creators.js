import { CREATORS_LOADING, CREATORS_ERROR, CREATORS_LOADED } from './types'

const initState = {
    loading: true,
    creators: [],
    error: null,
}

export default function (state = initState, action) {
    switch (action.type) {
        case CREATORS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case CREATORS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CREATORS_LOADED:
            return {
                ...state,
                creators: action.payload,
            }
        default:
            return state
    }
}
