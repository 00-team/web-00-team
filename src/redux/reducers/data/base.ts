import { BaseModel, BaseTypes } from '../../models/Base'

const initState: BaseModel = {
    loading: false,
    base: null,
    error: null,
}

export default function (
    state = initState,
    action: { type: BaseTypes; payload: unknown }
) {
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

// import { createSlice, PayloadAction } from ''
