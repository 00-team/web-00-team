export interface ProjectModel {
    title: string
    description: {
        markdown: string
        text: string
    } | null

    projectUrl: string | null
    startDate: string
    projectSlug: string
    thumbnail: {
        url: string
    } | null

    demos: {
        url: string
    }[]
    git: string | null
}

export interface ProjectsModel {
    loading: boolean
    projects: ProjectModel[]
    error: string | null
}

export enum ProjectsTypes {
    PROJECTS_LOADING = 'PROJECTS_LOADING',
    PROJECTS_ERROR = 'PROJECTS_ERROR',
    PROJECTS_LOADED = 'PROJECTS_LOADED',
}
