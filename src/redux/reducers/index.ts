import { combineReducers } from 'redux'

import app from './app/app'
import Creators from './data/creators'
import Base from './data/base'
import projects from './data/projects'
import project from './data/project'

export default combineReducers({
    app,
    Creators,
    Base,
    projects,
    project,
})
