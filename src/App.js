import React from 'react'
import ReactDOM from 'react-dom'

// firebase
import app from 'firebase/app';

// style
import './app.scss'

const App = () => {
    console.log(app.SDK_VERSION);
    return (
        <div className='main'>
            <span>00 Team</span>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
