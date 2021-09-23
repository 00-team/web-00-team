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
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import JoinUs from './components/JoinUs'

// style
import './sass/base.scss'
import './sass/font-imports.scss'

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact>
                    {/* Head Tags */}

                    <HeroSection />

                    <About />
                    <Creators />
                    <Projects />
                    <JoinUs />
                </Route>
            </Switch>
        </Router>
    )
}

const Root = () => {
    return (
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    )
}

// export default App

ReactDOM.render(<Root />, document.getElementById('root'))
