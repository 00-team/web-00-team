import React from 'react'
import ReactDOM from 'react-dom'

// redux stuff
import { Provider as ReduxProvider } from 'react-redux'
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

const App = () => {
    return (
        <>
            <Navbar />

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
