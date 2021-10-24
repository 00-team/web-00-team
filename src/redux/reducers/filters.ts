import { FilterModel, FiltersType } from '../models/Filters'
import { Action } from '../action-types/filters'

const initState: FilterModel = {
    version: null,
    status: null,
    tags: [],
}

export default function (state = initState, action: Action): FilterModel {
    switch (action.type) {
        case FiltersType.SET_VERSION:
            return {
                ...state,
                version: action.payload,
            }
        case FiltersType.SET_STATUS:
            return {
                ...state,
                status: action.payload,
            }
        case FiltersType.SET_TAGS:
            return {
                ...state,
                tags: action.payload,
            }

        case FiltersType.CLEAR_FILTERS:
            return {}
        default:
            return state
    }
}
