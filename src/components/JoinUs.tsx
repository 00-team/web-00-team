import React from 'react'

// lazy motion
import LazyMotion from './common/LazyMotion'

// import css
import './sass/joinus.scss'

// icons
import { SiDiscord, SiGmail } from 'react-icons/si'

function JoinUs() {
    return (
        <div className='join-us' id='join'>
            <div className='container'>
                <LazyMotion>
                    <div className='header'>
                        <h1>Wana Join?</h1>
                    </div>
                </LazyMotion>
                <h2>contact us through:</h2>
                <div className='join'>
                    <ul className='social__list'>
                        <li>
                            <button
                                {...{ 'data-title': 'discord.gg/Z6vgXHU2xQ' }}
                                className='social__btn'
                                onClick={() =>
                                    window.open('https://discord.gg/Z6vgXHU2xQ')
                                }
                            >
                                <SiDiscord className='fab' />
                            </button>
                        </li>
                        <li>
                            <button
                                className='social__btn'
                                {...{ 'data-title': '00.team.mail@gmail.com' }}
                            >
                                <a href='mailto:00.team.mail@gmail.com'>
                                    <SiGmail className='fab' />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
