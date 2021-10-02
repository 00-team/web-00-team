export interface BaseModel {
    loading: boolean
    base: {
        about: {
            markdown: string
        }
    } | null
    error: string | null
}

export enum BaseTypes {
    BASE_LOADING = 'BASE_LOADING',
    BASE_ERROR = 'BASE_ERROR',
    BASE_LOADED = 'BASE_LOADED',
}
