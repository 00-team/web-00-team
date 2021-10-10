export interface CreatorModel {
    name: string
    bio: string
    duty: string[]
    id: string
    githubUsername: string
    picture: {
        url: string
    } | null
    bgColor: {
        hex: string
    } | null
}

export interface CreatorsModel {
    loading: boolean
    creators: CreatorModel[]
    error: string | null
}

export enum CreatorsTypes {
    CREATORS_LOADING = 'CREATORS_LOADING',
    CREATORS_ERROR = 'CREATORS_ERROR',
    CREATORS_LOADED = 'CREATORS_LOADED',
}
