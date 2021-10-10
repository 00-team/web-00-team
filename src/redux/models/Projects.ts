export interface ProjectModel {
    title: string
    thumbnail: {
        url: string
    }
    startDate: string
    projectSlug: string
    projectUrl: string
    git: string
    demos: {
        url: string
    }[]
    description: {
        markdown: string
    }
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
