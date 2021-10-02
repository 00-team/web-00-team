import React from 'react'
import ReactDOM from 'react-dom'

// redux stuff
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import { store } from './redux'

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import HeroSection from './components/HeroSection'
import About from './components/About'
import Creators from './components/Creators'
import ProjectsInMain from './components/ProjectsInMain'
import JoinUs from './components/JoinUs'

// elements
import Loading from './components/elements/Loading'

// projects
import Projects from './components/Projects'
import Project from './components/Projects/Project'

// layouts
import Navbar from './layouts/Navbar'

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
