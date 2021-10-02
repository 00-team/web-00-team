export interface BaseModel {
    loading: boolean
    base: {} | null
    error: string | null
}

export enum BaseTypes {
    BASE_LOADING = 'BASE_LOADING',
    BASE_ERROR = 'BASE_ERROR',
    BASE_LOADED = 'BASE_LOADED',
}
