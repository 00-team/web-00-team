import { ProjectsModel, ProjectsTypes } from '../../models/Projects'

const initState: ProjectsModel = {
    loading: false,
    projects: [],
    error: null,
}

export default function (
    state = initState,
    action: { type: ProjectsTypes; payload: unknown }
) {
    switch (action.type) {
        case ProjectsTypes.PROJECTS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case ProjectsTypes.PROJECTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case ProjectsTypes.PROJECTS_LOADED:
            return {
                ...state,
                projects: action.payload,
            }
        default:
            return state
    }
}
