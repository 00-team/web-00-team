import { request } from 'graphql-request'

import {
    BASE_ERROR,
    BASE_LOADED,
    BASE_LOADING,
} from '../../reducers/data/types'

import { API_URL } from './config'

export default () => async dispatch => {
    dispatch({ type: BASE_LOADING, payload: true })

    try {
        const { base } = await request(
            API_URL,
            `{
                base(where: {id: "cktvyjybc0jxe0b084duv9wy7"}, locales: en) {
                    about {
                        markdown
                    }
                }
            }`
        )

        dispatch({ type: BASE_LOADED, payload: base })
    } catch (error) {
        dispatch({ type: BASE_ERROR, payload: 'Error to load Creators' })
    }

    dispatch({ type: BASE_LOADING, payload: false })
}
