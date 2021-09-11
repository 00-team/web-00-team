import React from 'react'
import ReactDOM from 'react-dom'

// components 
import HeroSection from './components/HeroSection';
import About from './components/About';

// firebase
import app from 'firebase/app';


// style
import './app.scss'

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <>
            <HeroSection />
            <About />
        </>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
