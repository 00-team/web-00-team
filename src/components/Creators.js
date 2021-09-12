import React from 'react'

// import css
import './sass/creators.scss'

// imgs
import aria from '../img/aria.jpg'
import sadra from '../img/sadra.png'

var creators_status = [
    {
        img: aria,
        title: 'Sadra',
        discription: 'Perfect People Don`t Exist So Don`t Pretend To Be One',
    },
    { img: sadra, title: '007', discription: 'The Time Of Maddnes Has Come' },
]

function Creators() {
    return (
        <div className='creators'>
            <div className='container'>
                <div className='header'>
                    <h1>Creators</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Creators
