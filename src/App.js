import React from 'react'
import ReactDOM from 'react-dom'

// redux stuff
import { Provider as ReduxProvider, useSelector } from 'react-redux'
import store from './redux/store'

// router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import HeroSection from './components/HeroSection'
import About from './components/About'
import Creators from './components/Creators'
import Projects from './components/Projects'
import JoinUs from './components/JoinUs'

// layouts
import Navbar from './layouts/Navbar'

// style
import './sass/base.scss'
import './sass/fonts/imports.scss'

const LoadingStatus = () => {
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

            {/* loading ... */}
            {loadings.some(i => i) && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: 100,
                        inset: '0 0 0 0',
                        background: 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        color: '#fff',
                    }}
                >
                    <span>Loading ...</span>
                    <span
                        style={{
                            width: '40%',
                            height: '10px',
                            background: '#FFF1',
                            overflow: 'hidden',
                            borderRadius: 10,
                        }}
                    >
                        <span
                            style={{
                                background: '#FFF9',
                                width: `${Math.floor(
                                    (loadings.filter(i => !i).length /
                                        loadings.length) *
                                        100
                                )}%`,
                                height: '100%',
                                display: 'block',
                            }}
                        ></span>
                    </span>
                </div>
            )}

            <Switch>
                <Route path='/' exact>
                    <HeroSection />
                    <About />
                    <Projects />
                    <Creators />
                    <JoinUs />
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

// export default App

ReactDOM.render(<Root />, document.getElementById('root'))
