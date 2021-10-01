import { request } from 'graphql-request'

import {
    CREATORS_ERROR,
    CREATORS_LOADED,
    CREATORS_LOADING,
} from '../../reducers/data/types'

import { API_URL } from './config'

export default () => async dispatch => {
    dispatch({ type: CREATORS_LOADING, payload: true })

    try {
        const { creators } = await request(
            API_URL,
            `{
                creators(locales: en) {
                    name
                    bio
                    duty
                    id
                    githubUsername
                    picture {
                        url
                    }
                    bgColor {
                        hex
                    }
                }
            }`
        )

        dispatch({ type: CREATORS_LOADED, payload: creators })
    } catch (error) {
        dispatch({ type: CREATORS_ERROR, payload: 'Error to load Creators' })
    }

    dispatch({ type: CREATORS_LOADING, payload: false })
}
