import { BaseModel, BaseTypes } from '../models/Base'
import { Action } from '../action-types/base'

const initState: BaseModel = {
    loading: false,
    base: null,
    error: null,
}

export default function (state = initState, action: Action): BaseModel {
    switch (action.type) {
        case BaseTypes.BASE_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case BaseTypes.BASE_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case BaseTypes.BASE_LOADED:
            return {
                ...state,
                base: action.payload,
            }
        default:
            return state
    }
}
