import { request } from 'graphql-request'
import gql from 'graphql-tag'

import { CreatorsTypes } from 'src/redux/models/Creators'

import type { AppDispatch } from '../../store'

import { API_URL } from './config'

export default () => async (dispatch: AppDispatch) => {
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
