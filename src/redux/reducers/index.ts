import { combineReducers } from 'redux'

import Creators from './creators'
import Base from './base'
import Projects from './projects'

const reducers = combineReducers({
    Creators,
    Base,
    Projects,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
