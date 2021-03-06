export const IMAGE_MIMETYPE = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webm',
]
export const VIDEO_MIMETYPE = ['video/mp4', 'video/webm']

interface Assest {
    handle: string
    id: string
    mimeType: string
    size: number
    url: string
}

interface Demo extends Assest {
    index: number
}

interface ProjectDescription {
    markdown: string
    text: string
}

export interface ProjectModel {
    title: string
    description: ProjectDescription | null
    projectUrl: string | null
    startDate: string
    projectSlug: string
    thumbnail: Assest
    demos: Demo[]
    git: string | null
    projectStatus: 'finished' | 'inProgress' | 'preparation'
    projectTags: ProjectTags[]
    version: string
}

export interface ProjectsModel {
    loading: boolean
    projects: ProjectModel[]
    error: string | null
}

// enums
export enum ProjectsTypes {
    PROJECTS_LOADING = 'PROJECTS_LOADING',
    PROJECTS_ERROR = 'PROJECTS_ERROR',
    PROJECTS_LOADED = 'PROJECTS_LOADED',
}

export const ProjectStatus = {
    finished: 'Finished',
    inProgress: 'in Progress',
    preparation: 'Preparation',
}

export enum ProjectTags {
    website = 'website',
    desktop = 'desktop',
    mobile = 'mobile',
    fun = 'fun',
    demo = 'demo',
    business = 'business',
}

export const ProjectTagsList = [
    'website',
    'desktop',
    'mobile',
    'fun',
    'demo',
    'business',
]

export const ProjectStatusList = ['finished', 'inProgress', 'preparation']
