import React from 'react'
import ReactDOM from 'react-dom'

// firebase
import app from 'firebase/app';

// style
import './app.scss'

// 00 team logo
import Logo from './img/00.png'

const App = () => {
    document.getElementById('xxx').setAttribute("content", Logo);

    console.log(app.SDK_VERSION);
    return (
        <div className='main'>
            <span>00 Team</span>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
