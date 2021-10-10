import { ProjectModel, ProjectsTypes } from '../models/Projects'

interface LOADING_ACTION {
    type: ProjectsTypes.PROJECTS_LOADING
    payload: boolean
}

interface ERROR_ACTION {
    type: ProjectsTypes.PROJECTS_ERROR
    payload: string | null
}

interface LOADED_ACTION {
    type: ProjectsTypes.PROJECTS_LOADED
    payload: ProjectModel[]
}

export type Action = LOADING_ACTION | LOADED_ACTION | ERROR_ACTION
