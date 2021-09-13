import React from 'react'

// icons
import { FiGithub } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'

// import css
import './sass/creators.scss'

// imgs
import img_007 from '../img/007.png'
import sadra from '../img/sadra.png'

var creators_status = [
    {
        img: sadra,
        title: 'Sadra',
        background: 'grey',
        role: '00 Team Developer',
        discription: "perfect people don't exist, so don't pretend to be one",
        github: 'https://github.com/SadraTghvi',
    },
    {
        img: img_007,
        title: '007',
        background: 'black',
        role: '00 Team Developer',
        discription: 'time of Madness has come',
        github: 'https://github.com/i007c',
    },
]

function Creators() {
    return (
        <div className='creators'>
            <div className='container'>
                <div className='header'>
                    <h1>Creators</h1>
                </div>
                <div className='cards'>
                    {creators_status.map((obj, index) => {
                        return (
                            <div className='card' key={index}>
                                <div
                                    className='creator-img'
                                    style={{ backgroundColor: obj.background }}
                                >
                                    <img src={obj.img} />
                                </div>
                                <div className='text-container'>
                                    <h1 className='title'>{obj.title}</h1>
                                    <h4 className='role'>{obj.role}</h4>
                                    <p className='discription'>
                                        {obj.discription}
                                    </p>
                                    <div
                                        className='social github'
                                        onClick={e => window.open(obj.github)}
                                    >
                                        Github <FiGithub />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Creators
