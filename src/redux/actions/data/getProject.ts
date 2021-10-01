import { request } from 'graphql-request'
import gql from 'graphql-tag'

import {
    PROJECT_ERROR,
    PROJECT_LOADED,
    PROJECT_LOADING,
} from '../../reducers/data/types'

import { API_URL } from './config'

export default slug => async dispatch => {
    dispatch({ type: PROJECT_LOADING, payload: true })

    try {
        const { project } = await request(
            API_URL,
            gql`
                {
                    project(where: { projectSlug: "${slug}" }) {
                        title
                        thumbnail {
                            url(transformation: { image: {} })
                        }
                        startDate
                        projectSlug
                        projectUrl
                        git
                        demos {
                            url
                        }
                        description {
                            markdown
                        }
                    }
                }
            `
        )

        dispatch({ type: PROJECT_LOADED, payload: project })
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: `Error to load Project with slug: ${slug}`,
        })
    }

    dispatch({ type: PROJECT_LOADING, payload: false })
}
