import {
    SCROLLTOP_ABOUT,
    SCROLLTOP_CREATORS,
    SCROLLTOP_JOIN,
    SCROLLTOP_PROJECTS,
} from './types'

const initState = {
    about: 0,
    projects: 0,
    creators: 0,
    join: 0,
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case SCROLLTOP_ABOUT:
            return {
                ...state,
                about: payload,
            }
        case SCROLLTOP_PROJECTS:
            return {
                ...state,
                projects: payload,
            }
        case SCROLLTOP_CREATORS:
            return {
                ...state,
                creators: payload,
            }
        case SCROLLTOP_JOIN:
            return {
                ...state,
                join: payload,
            }
        default:
            return state
    }
}
