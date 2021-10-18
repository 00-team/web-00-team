export interface CreatorModel {
    id: string
    name: string
    roles: string[]
    quote?: string
    joinDate: string
    twitterUsername?: string
    githubUsername?: string
    profile: {
        url: string
    }
    banner: {
        url: string
    }
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
