import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

// loadable
import Loadable from '@loadable/component'

// redux stuff
import {
    Provider as ReduxProvider,
    useSelector,
    useDispatch,
} from 'react-redux'
import { LoadBase, LoadCreators, LoadJoinTeam } from './redux/actions/'
import { store } from './redux'
import { RootState } from './redux'
import { AppTypes } from './redux/models/App'

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import HeroSection from './components/HeroSection'
import Team from './components/Team'
import Error from './layouts/Error'
import MainBg from './components/MainBg'

const About = Loadable(() => import('./components/About'))

const Demos = Loadable(() => import('./components/Demos/Demos'))

const JoinTeam = Loadable(() => import('./components/JoinTeam'))

const Creators = Loadable(() => import('./components/Creators'))

const Business = Loadable(() => import('./components/Business'))

// commons
import Loading from './components/common/Loading'
import { LittleDream } from './components/common/Button'
import Head from './components/common/Head'

// projects
const Projects = Loadable(() => import('./components/Projects'))

const Project = Loadable(() => import('./components/Projects/Project'))

// layouts
const Navbar = Loadable(() => import('./layouts/Navbar'))
const Footer = Loadable(() => import('./layouts/Footer'))

// style
import './sass/base.scss'
import './sass/fonts/imports.scss'

const LoadingStatus = (): boolean[] => {
    const BaseState = useSelector((state: RootState) => state.Base)
    const CreatorsState = useSelector((state: RootState) => state.Creators)
    const ProjectsState = useSelector((state: RootState) => state.Projects)

    return [ProjectsState, BaseState, CreatorsState].map(state => state.loading)
}

const App: FC = () => {
    const loadings = LoadingStatus()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LoadBase())
        dispatch(LoadCreators())
        dispatch(LoadJoinTeam())
        dispatch({ type: AppTypes.SET_WINWID, payload: window.innerWidth })
        window.onresize = () => {
            dispatch({ type: AppTypes.SET_WINWID, payload: window.innerWidth })
        }
    }, [dispatch])

    return (
        <>
            <MainBg />
            <Head />
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
                    <About />
                    <Demos LoadingRender={false} />
                    <Creators />
                </Route>

                <Route path='/projects'>
                    <Projects />
                </Route>

                <Route path='/project/:slug'>
                    <Project />
                </Route>

                <Route path='/team'>
                    <Team />
                    <About />
                    <Creators ExtraClass={'team'} />
                    <JoinTeam />
                </Route>

                <Route path='/team#join-team'>
                    <JoinTeam />
                </Route>

                <Route path='/business'>
                    <Business />
                </Route>
                <Route path='/test'>
                    <JoinTeam />
                </Route>

                <Route path='/fun'>
                    <div style={{ padding: 50, color: 'snow' }}>
                        <LittleDream>a Little Dream</LittleDream>
                    </div>
                </Route>

                <Route path='*'>
                    <Error code='404' />
                </Route>
            </Switch>

            <Footer />
            <Navbar />
        </>
    )
}

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

export default App
