import { combineReducers } from 'redux'

import Creators from './creators'
import Base from './base'
import Projects from './projects'
import App from './app'

const reducers = combineReducers({
    Creators,
    Base,
    Projects,
    App,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
