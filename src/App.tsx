import React from 'react'
import ReactDOM from 'react-dom'

// loadable
import Loadable from 'react-loadable'

// redux stuff
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { store } from './redux'

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import HeroSection from './components/HeroSection'
import ProjectsInMain from './components/ProjectsInMain'

const About = Loadable({
    loader: () => import('./components/About'),
    loading: () => <span>Loading About</span>,
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

// elements
import Loading from './components/common/Loading'

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

const LoadingStatus = (): boolean[] | null => {
    const state = useSelector(state => state)
    if (typeof state === 'object') {
        return Object.values(state)
            .filter(i => i.loading !== undefined)
            .map(i => i.loading)
    } else {
        return null
    }
}

const App = () => {
    let loadings = LoadingStatus()

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
                    <ProjectsInMain loadingRender={false} />
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
