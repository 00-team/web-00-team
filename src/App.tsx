import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

// helmet
import { Helmet } from 'react-helmet'

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

const About = Loadable(() => import('./components/About'))

const Demos = Loadable(() => import('./components/Demos/Demos'))

const JoinTeam = Loadable(() => import('./components/JoinTeam'))

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

const App = () => {
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
                    <Creators />
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

const Root = () => {
    return (
        <ReduxProvider store={store}>
            <Router>
                <App />
            </Router>
        </ReduxProvider>
    )
}

const Head: FC = () => {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
            />
            <meta name='theme-color' content='#040404' />

            {/* open graph protocol */}
            <meta property='og:title' content='00 Team' />
            <meta property='og:type' content='website' />

            {/* image */}
            <meta
                property='og:image'
                content='https://media.graphcms.com/output=format:jpg/resize=,width:500,height:500/UjmjWRNcTpC65k1cR9Zb'
            />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:width' content='500' />
            <meta property='og:image:height' content='500' />
            <meta property='og:image:alt' content='00 Team Logo' />

            <meta property='og:url' content='https://web-00-team.web.app/' />
            <meta
                property='og:description '
                content='a Team of Best Creators in The World ...'
            />
            <meta property='og:site_name' content='00 Team' />

            <meta
                name='keywords'
                content='00 Team,github 00 Team,00 Team Page'
            />

            <meta name='copyright' content='00 Team' />

            <meta
                name='google-site-verification'
                content='K7RyLbYQ05aoqzSC3oaMMJuWtb0n6S-t4WKDZOtlAdU'
            />

            <title>00 Team</title>
        </Helmet>
    )
}

const RootElement = document.getElementById('root')

if (RootElement) {
    if (RootElement.hasChildNodes()) {
        ReactDOM.hydrate(<Root />, RootElement)
    } else {
        ReactDOM.render(<Root />, RootElement)
    }
}

export default App
