import { ProjectTags, ProjectStatus } from './Projects'

export type VersionType = 'beta' | 'release' | null
export type StatusType = ProjectStatus | null
export type TagsType = ProjectTags

export interface FilterModel {
    version?: VersionType
    tags?: TagsType[]
    status?: StatusType
}

export enum FiltersType {
    SET_VERSION = 'SET_VERSION',
    SET_STATUS = 'SET_STATUS',
    SET_TAGS = 'SET_TAGS',
    CLEAR_FILTERS = 'CLEAR_FILTERS',
}
