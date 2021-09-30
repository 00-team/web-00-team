import { request } from 'graphql-request'

import {
    PROJECTS_ERROR,
    PROJECTS_LOADED,
    PROJECTS_LOADING,
} from '../../reducers/data/types'

import { API_URL } from './config'

export default () => async dispatch => {
    dispatch({ type: PROJECTS_LOADING, payload: true })

    try {
        const { projects } = await request(
            API_URL,
            `{
                 projects(locales:en) {
                    title
                    description
                    picture {
                        url
                    }
                }
            }`
        )

        dispatch({ type: PROJECTS_LOADED, payload: projects })
    } catch (error) {
        dispatch({ type: PROJECTS_ERROR, payload: 'Error to load Projects' })
    }

    dispatch({ type: PROJECTS_LOADING, payload: false })
}