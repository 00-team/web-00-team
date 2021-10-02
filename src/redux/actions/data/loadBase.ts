import { request } from 'graphql-request'

// diaptch type
import type { AppDispatch } from '../../store'

// base enums
import { BaseTypes } from '../../models/Base'

import { API_URL } from './config'

export default () => async (dispatch: AppDispatch) => {
    dispatch({ type: BaseTypes.BASE_LOADING, payload: true })

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

        dispatch({ type: BaseTypes.BASE_LOADED, payload: base })
    } catch (error) {
        dispatch({
            type: BaseTypes.BASE_ERROR,
            payload: 'Error to load Creators',
        })
    }

    dispatch({ type: BaseTypes.BASE_LOADING, payload: false })
}
