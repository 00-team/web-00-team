import React from 'react'
import ReactDOM from 'react-dom'

// components 
import HeroSection from './components/HeroSection';
import About from './components/About';
import Creators from './components/Creators';
import Projects from './components/Projects';

// firebase
import app from 'firebase/app';


// style
import './app.scss'
import JoinUs from './components/JoinUs';

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <>
            <HeroSection />
            <About       />
            <Creators    />
            <Projects    />
            <JoinUs      />
        </>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
