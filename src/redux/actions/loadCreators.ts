import { request } from 'graphql-request'
import gql from 'graphql-tag'

// dispatch
import { Dispatch } from 'redux'
import { Action } from '../action-types/creators'

// types
import { CreatorsTypes } from '../models/Creators'

import { API_URL } from './config'

export default () => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CreatorsTypes.CREATORS_LOADING, payload: true })

    try {
        const { creators } = await request(
            API_URL,
            gql`
                {
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
                }
            `
        )

        dispatch({ type: CreatorsTypes.CREATORS_LOADED, payload: creators })
    } catch (error) {
        dispatch({
            type: CreatorsTypes.CREATORS_ERROR,
            payload: 'Error to load Creators',
        })
    }

    dispatch({ type: CreatorsTypes.CREATORS_LOADING, payload: false })
}
