import { request } from 'graphql-request'
import gql from 'graphql-tag'

// dispatch type
import type { AppDispatch } from '../../store'

// project enums
import { ProjectsTypes } from '../../models/Projects'

import { API_URL } from './config'

interface GetProjectsProps {
    order?: 'title_ASC' | 'title_DESC' | 'startDate_ASC' | 'startDate_DESC'
    stage?: 'PUBLISHED' | 'DRAFT'
    first?: number
    last?: number
    where?: {}
}

export default ({
        order,
        stage = 'PUBLISHED',
        first,
        last,
        where,
    }: GetProjectsProps) =>
    async (dispatch: AppDispatch) => {
        dispatch({ type: ProjectsTypes.PROJECTS_LOADING, payload: true })

        try {
            const { projects } = await request(
                API_URL,
                gql`
                    {
                        projects(
                            orderBy: ${order ? order : null}
                            where: ${where ? where : null}
                            first: ${first ? first : null}
                            last: ${last ? last : null}
                            stage: ${stage}
                        ) {
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

            dispatch({ type: ProjectsTypes.PROJECTS_LOADED, payload: projects })
        } catch (error) {
            dispatch({
                type: ProjectsTypes.PROJECTS_ERROR,
                payload: 'Error to load Projects',
            })
        }

        dispatch({ type: ProjectsTypes.PROJECTS_LOADING, payload: false })
    }
