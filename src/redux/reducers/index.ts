import { combineReducers } from 'redux'

import Creators from './creators'
import Base from './base'
import Projects from './projects'
import App from './app'
import JoinTeam from './joinTeam'
import Filters from './filters'

const reducers = combineReducers({
    Creators,
    Base,
    Projects,
    App,
    JoinTeam,
    Filters,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
