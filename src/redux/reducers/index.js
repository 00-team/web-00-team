import { combineReducers } from 'redux'

import app from './app/app'
import Creators from './data/creators'
import Base from './data/base'

export default combineReducers({
    app,
    Creators,
    Base,
})
