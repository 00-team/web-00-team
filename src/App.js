import React from 'react'
import ReactDOM from 'react-dom'

// style
import './app.scss'

import app from 'firebase/app';

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <div className='main'>
            <span>00 Team solam</span>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
