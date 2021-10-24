import { FiltersType, VersionType, StatusType } from '../models/Filters'

import { ProjectTags } from '../models/Projects'

// filter models
export interface SET_VERSION_ACTION {
    type: FiltersType.SET_VERSION
    payload: VersionType
}
export interface SET_STATUS_ACTION {
    type: FiltersType.SET_STATUS
    payload: StatusType
}
export interface SET_TAGS_ACTION {
    type: FiltersType.SET_TAGS
    payload: ProjectTags[]
}

// clear all
export interface CLEAR_FILTERS_ACTION {
    type: FiltersType.CLEAR_FILTERS
}

export type Action =
    | SET_VERSION_ACTION
    | SET_STATUS_ACTION
    | SET_TAGS_ACTION
    | CLEAR_FILTERS_ACTION
