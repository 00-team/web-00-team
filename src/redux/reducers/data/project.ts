import { PROJECT_LOADING, PROJECT_ERROR, PROJECT_LOADED } from './types'

const initState = {
    loading: false,
    project: null,
    error: null,
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case PROJECT_LOADING:
            return {
                ...state,
                loading: payload,
            }
        case PROJECT_ERROR:
            return {
                ...state,
                error: payload,
            }
        case PROJECT_LOADED:
            return {
                ...state,
                project: payload,
            }
        default:
            return state
    }
}
