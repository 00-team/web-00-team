import { BaseTypes, BaseDataModel } from '../models/Base'

interface LOADING_ACTION {
    type: BaseTypes.BASE_LOADING
    payload: boolean
}

interface ERROR_ACTION {
    type: BaseTypes.BASE_ERROR
    payload: string | null
}

interface LOADED_ACTION {
    type: BaseTypes.BASE_LOADED
    payload: BaseDataModel
}

export type Action = LOADING_ACTION | LOADED_ACTION | ERROR_ACTION
