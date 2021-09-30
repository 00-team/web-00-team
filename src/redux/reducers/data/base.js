import { BASE_LOADING, BASE_ERROR, BASE_LOADED } from './types'

const initState = {
    loading: true,
    base: null,
    error: null,
}

export default function (state = initState, action) {
    switch (action.type) {
        case BASE_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case BASE_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case BASE_LOADED:
            return {
                ...state,
                base: action.payload,
            }
        default:
            return state
    }
}
