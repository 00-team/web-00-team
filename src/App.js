import React from 'react'
import ReactDOM from 'react-dom'

// style
import './app.scss'


const App = () => {
    return (
        <div className='main'>
            <span>00 Team</span>
        </div>
    )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
