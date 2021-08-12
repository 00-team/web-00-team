import React from 'react'
import ReactDOM from 'react-dom'

// firebase
import app from 'firebase/app';

// icons
import { FiGithub } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'

// style
import './app.scss'

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <div className='main'>
            <span>00 Team</span>
            <div className='social'>
                <SiDiscord onClick={e => window.open('https://discord.gg/Z6vgXHU2xQ')} />
                <FiGithub onClick={e => window.open('https://github.com/00-team')} />
            </div>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
