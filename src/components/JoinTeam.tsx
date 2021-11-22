import React, { FC } from 'react'

import { useLocation } from 'react-router-dom'

import Loadable from '@loadable/component'

import Markdown from 'markdown-to-jsx'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// icons
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiDiscord } from '@react-icons/all-files/si/SiDiscord'
import { SiGmail } from '@react-icons/all-files/si/SiGmail'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// styling
import './sass/join-team.scss'

const Hex: FC = ({ children }) => {
    return (
        <div className='hex'>
            <div className='borders'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className='borders animation'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {children}
        </div>
    )
}

const JoinTeam: FC = () => {
    const location = useLocation()
    const state = useSelector((state: RootState) => state.JoinTeam.joinTeam)

    if (!state) return <></>

    if (location.hash === '#join-team') {
        const element = document.getElementById('join-team')
        if (element) {
            element.scrollIntoView()
        }
    }

    return (
        <section className='join-team' id='join-team'>
            <LazyMotion>
                <h2 className='title'>{state.title}</h2>
            </LazyMotion>
            <div className='body'>
                <div className='description'>
                    <Markdown children={state.description} />
                </div>
                <h3 className='u-hide-visually'>conditions</h3>
                <div className='condition'>
                    <h4 className='name'>Skills:</h4>
                    <ul className='list'>
                        {state.skills.map((item, index) => (
                            <li key={index} className='item'>
                                <b>{index + 1}.</b> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='condition'>
                    <h4 className='name'>Good To Have:</h4>
                    <ul className='list'>
                        {state.needlessToSay.map((item, index) => (
                            <li key={index} className='item'>
                                <b>{index + 1}.</b> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='condition'>
                    <h4 className='name'>
                        Needless To Say, You Should Be Familiar With:
                    </h4>
                    <ul className='list'>
                        {state.goodToHave.map((item, index) => (
                            <li key={index} className='item'>
                                <b>{index + 1}.</b> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='contact'>
                <h3 className='title'>
                    Assuming You Have The Requirments Above, You Can Contact Us
                    Through:
                </h3>
                <div className='socials'>
                    <a href='https://twitter.com/00team_official'>
                        <Hex>
                            <FaTwitter />
                        </Hex>
                    </a>

                    <a href='mailto:00.team.mail@gmail.com '>
                        <Hex>
                            <SiGmail />
                        </Hex>
                    </a>

                    <a href='https://discord.com/invite/Z6vgXHU2xQ'>
                        <Hex>
                            <SiDiscord />
                        </Hex>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default JoinTeam
