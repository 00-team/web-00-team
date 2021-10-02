import { ProjectsModel, ProjectsTypes } from '../models/Projects'
import { Action } from '../action-types/projects'

const initState: ProjectsModel = {
    loading: false,
    projects: [],
    error: null,
}

export default function (state = initState, action: Action): ProjectsModel {
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
