import { AppTypes } from '../models/App'

export interface SET_WINWID_ACTION {
    type: AppTypes.SET_WINWID
    payload: number
}

export type Action = SET_WINWID_ACTION
