import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// loadable
import Loadable from 'react-loadable'

// redux stuff
import {
    Provider as ReduxProvider,
    useSelector,
    useDispatch,
} from 'react-redux'
import { store } from './redux'
import { RootState } from './redux'
import { AppTypes } from './redux/models/App'

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import HeroSection from './components/HeroSection'

const About = Loadable({
    loader: () => import('./components/About'),
    loading: () => <span>Loading About</span>,
})

const Demos = Loadable({
    loader: () => import('./components/Demos'),
    loading: () => <span>Loading Demos</span>,
})

const JoinUs = Loadable({
    loader: () => import('./components/JoinUs'),
    loading: () => <span>Loading JoinUS</span>,
})

const Creators = Loadable({
    loader: () => import('./components/Creators'),
    loading: () => <span>Loading Creators</span>,
})

const Business = Loadable({
    loader: () => import('./components/Business'),
    loading: () => <span>Loading Business</span>,
})

// commons
import Loading from './components/common/Loading'
import { LittleDream } from './components/common/Button'

// projects
const Projects = Loadable({
    loader: () => import('./components/Projects'),
    loading: () => <span>Loading Projcts</span>,
})

const Project = Loadable({
    loader: () => import('./components/Projects/Project'),
    loading: () => <span>Loading Projct</span>,
})

// layouts
const Navbar = Loadable({
    loader: () => import('./layouts/Navbar'),
    loading: () => <span>loading Navbar</span>,
})

// style
import './sass/base.scss'
import './sass/fonts/imports.scss'

const LoadingStatus = (): boolean[] => {
    const state = useSelector((state: RootState) => state)
    return Object.values(state)
        .filter(i => i.loading !== undefined)
        .map(i => i.loading)
}

const App = () => {
    const loadings = LoadingStatus()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: AppTypes.SET_WINWID, payload: window.innerWidth })
        window.onresize = () => {
            dispatch({ type: AppTypes.SET_WINWID, payload: window.innerWidth })
        }
    }, [dispatch])

    return (
        <>
            <Navbar />

            <Switch>
                <Route path='/' exact>
                    {loadings && (
                        <Loading
                            loading={loadings.some(i => i)}
                            total={loadings.length}
                            loaded={loadings.filter(i => !i).length}
                            fixed={true}
                        />
                    )}

                    <HeroSection />
                    <About loadingRender={false} />
                    <Demos loadingRender={false} />
                    <Creators loadingRender={false} />
                    <JoinUs />
                </Route>

                <Route path='/projects'>
                    <Projects />
                </Route>

                <Route path='/project/:slug'>
                    <Project />
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/creators'>
                    <Creators />
                    <JoinUs />
                </Route>

                <Route path='/business'>
                    <Business />
                </Route>

                <Route path='/fun'>
                    <div style={{ padding: 50, color: 'snow' }}>
                        <LittleDream>a Little Dream</LittleDream>
                    </div>
                </Route>

                <Route path='*'>
                    <span style={{ color: '#fff' }}>Error 404</span>
                </Route>
            </Switch>
        </>
    )
}

const Root = () => {
    return (
        <ReduxProvider store={store}>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))

export default App
