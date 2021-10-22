import { request } from 'graphql-request'

// dispatch type
import { Dispatch } from 'redux'
import { Action } from '../action-types/projects'

// project enums
import { ProjectsTypes } from '../models/Projects'

import { API_URL } from './config'

interface GetProjectsProps {
    order?: 'title_ASC' | 'title_DESC' | 'startDate_ASC' | 'startDate_DESC'
    stage?: 'PUBLISHED' | 'DRAFT'
    first?: number
    last?: number
    where?: string
}

export const GetProject =
    ({ order, stage, first, last, where }: GetProjectsProps = {}) =>
    async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ProjectsTypes.PROJECTS_LOADING, payload: true })

        try {
            const { projects } = await request(
                API_URL,
                `
                {
                    projects(
                        orderBy: ${order ? order : null}
                        where: ${where ? where : null}
                        first: ${first ? first : null}
                        last: ${last ? last : null}
                        stage: ${stage ? stage : 'PUBLISHED'}
                    ) {
                        title
                        description { text markdown }
                        projectUrl
                        startDate
                        projectSlug
                        thumbnail { handle id mimeType size url }
                        demos { handle id mimeType size url }
                        git
                        projectStatus
                        projectTags
                        version
                    }
                }
                `
            )

            dispatch({ type: ProjectsTypes.PROJECTS_LOADED, payload: projects })
        } catch (error) {
            dispatch({
                type: ProjectsTypes.PROJECTS_ERROR,
                payload: 'Error to load Projects',
            })
        }

        dispatch({ type: ProjectsTypes.PROJECTS_LOADING, payload: false })
    }
