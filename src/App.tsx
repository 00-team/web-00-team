import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// loadable
import Loadable from '@loadable/component'

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

// const About = Loadable({
//     loader: () => import('./components/About'),
//     loading: () => <span>Loading About</span>,
// })

const About = Loadable(() => import('./components/About'))

const Demos = Loadable(() => import('./components/Demos/Demos'))

const JoinUs = Loadable(() => import('./components/JoinUs'))

const Creators = Loadable(() => import('./components/Creators'))

const Business = Loadable(() => import('./components/Business'))

// commons
import Loading from './components/common/Loading'
import { LittleDream } from './components/common/Button'

// projects
const Projects = Loadable(() => import('./components/Projects'))

const Project = Loadable(() => import('./components/Projects/Project'))

// layouts
const Navbar = Loadable(() => import('./layouts/Navbar'))

// style
import './sass/base.scss'
import './sass/fonts/imports.scss'

const LoadingStatus = (): boolean[] => {
    const BaseState = useSelector((state: RootState) => state.Base)
    const CreatorsState = useSelector((state: RootState) => state.Creators)
    const ProjectsState = useSelector((state: RootState) => state.Projects)

    return [ProjectsState, BaseState, CreatorsState].map(state => state.loading)
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
                    <Demos LoadingRender={false} />
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
