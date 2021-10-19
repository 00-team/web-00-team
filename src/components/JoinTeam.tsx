import React from 'react'

import Loadable from '@loadable/component'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// style
import './sass/joinus.scss'

// icons
import { SiDiscord } from '@react-icons/all-files/si/SiDiscord'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

function JoinUs() {
    const state = useSelector((state: RootState) => state.JoinTeam)
    console.log(state)

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
                            <a
                                {...{
                                    'data-title': 'discord.gg/Z6vgXHU2xQ',
                                }}
                                className='social__btn'
                                onClick={() =>
                                    window.open('https://discord.gg/Z6vgXHU2xQ')
                                }
                            >
                                <SiDiscord className='fab' />
                            </a>
                        </li>
                        <li>
                            <a
                                className='social__btn'
                                {...{
                                    'data-title': '00.team.mail@gmail.com',
                                }}
                                href='mailto:00.team.mail@gmail.com'
                            >
                                <SiGmail className='fab' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
