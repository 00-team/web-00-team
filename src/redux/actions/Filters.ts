// dispatch
import { Dispatch } from 'redux'
import { Action } from '../action-types/filters'

// types
import { FiltersType, StatusType, VersionType } from '../models/Filters'
import { ProjectTags } from '../models/Projects'

// version
export const FilterVersion =
    (version: VersionType) => async (dispatch: Dispatch<Action>) =>
        dispatch({ type: FiltersType.SET_VERSION, payload: version })

// status
export const FilterStatus =
    (status: StatusType) => async (dispatch: Dispatch<Action>) =>
        dispatch({ type: FiltersType.SET_STATUS, payload: status })

// tags
export const FilterTags =
    (tags: ProjectTags[]) => async (dispatch: Dispatch<Action>) =>
        dispatch({ type: FiltersType.SET_TAGS, payload: tags })

// clear all
export const CkearFilters = () => async (dispatch: Dispatch<Action>) =>
    dispatch({ type: FiltersType.CLEAR_FILTERS })
