import { request } from 'graphql-request'

// dispatch
import { Dispatch } from 'redux'
import { Action } from '../action-types/creators'

// types
import { CreatorsTypes } from '../models/Creators'

import { API_URL } from './config'

export const LoadCreators = () => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CreatorsTypes.CREATORS_LOADING, payload: true })

    try {
        const { creators } = await request(
            API_URL,
            `
            {
                creators {
                  banner {
                    url
                  }
                  githubUsername
                  id
                  joinDate
                  name
                  profile {
                    url
                  }
                  quote
                  roles
                  twitterUsername
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
