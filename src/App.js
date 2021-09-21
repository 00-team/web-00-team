import React from 'react'
import ReactDOM from 'react-dom'

// router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import Head from './components/Head'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Creators from './components/Creators'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import JoinUs from './components/JoinUs'

// auth
import Signup from './components/auth/Signup'

// firebase
import firebase from 'firebase/compat/app'

// style
import './sass/base.scss'

const App = () => {
    console.log(firebase.SDK_VERSION)

    return (
        <Router>
            <Navbar />
            <Head />
            <Switch>
                <Route path='/' exact>
                    {/* Head Tags */}

                    <HeroSection />

                    <About />
                    <Creators />
                    <Projects />
                    <JoinUs />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
