import { PROJECTS_LOADING, PROJECTS_ERROR, PROJECTS_LOADED } from './types'

const initState = {
    loading: true,
    projects: [],
    error: null,
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: payload,
            }
        case PROJECTS_ERROR:
            return {
                ...state,
                error: payload,
            }
        case PROJECTS_LOADED:
            return {
                ...state,
                projects: payload,
            }
        default:
            return state
    }
}
