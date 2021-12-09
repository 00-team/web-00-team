import React, { FC } from 'react'
import ReactDOM from 'react-dom'

// redux
import { Provider as ReduxProvider } from 'react-redux'

import { store } from './redux'

// router
import { BrowserRouter as Router } from 'react-router-dom'

// loadable
import Loadable from '@loadable/component'

const App = Loadable(() => import('./App'))

const Root: FC = () => {
    return (
        <ReduxProvider store={store}>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))
