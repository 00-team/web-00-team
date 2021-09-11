import React from 'react'
import ReactDOM from 'react-dom'

// components 
import HeroSection from './components/HeroSection';

// firebase
import app from 'firebase/app';


// style
import './app.scss'

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <>
            <HeroSection />
        </>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
