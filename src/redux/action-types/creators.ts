import { CreatorModel, CreatorsTypes } from '../models/Creators'

interface LOADING_ACTION {
    type: CreatorsTypes.CREATORS_LOADING
    payload: boolean
}

interface ERROR_ACTION {
    type: CreatorsTypes.CREATORS_ERROR
    payload: string | null
}

interface LOADED_ACTION {
    type: CreatorsTypes.CREATORS_LOADED
    payload: CreatorModel[]
}

export type Action = LOADING_ACTION | LOADED_ACTION | ERROR_ACTION
