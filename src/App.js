import React from 'react'
import ReactDOM from 'react-dom'

// components
import Head from './components/Head'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Creators from './components/Creators'
import Navbar from './components/Navbar'

// firebase
import firebase from 'firebase/compat/app'

// style
import './sass/base.scss'


const App = () => {
    console.log(firebase.SDK_VERSION)

    return (
        <>
            {/* Head Tags */}
            <Head />

            <Navbar />

            <HeroSection />
            <About />
            <Creators />
        </>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
