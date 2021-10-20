import React, { FC } from 'react'

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

const JoinTeam: FC = () => {
    const state = useSelector((state: RootState) => state.JoinTeam.joinTeam)

    if (!state) return <></>

    return (
        <div className='join-team'>
            <LazyMotion>
                <h2 className='title'>{state.title}</h2>
            </LazyMotion>
            <div className='body'>
                <div className='description'>
                    <Markdown children={state.description} />
                </div>
                <div className='condition'>
                    <span className='name'>Skills :</span>
                    <ul className='list'>
                        {state.skills.map((item, index) => (
                            <li key={index} className='item'>
                                <b>{index + 1}.</b> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='condition'>
                    <span className='name'>Good To Have :</span>
                    <ul className='list'>
                        {state.needlessToSay.map((item, index) => (
                            <li key={index} className='item'>
                                <b>{index + 1}.</b> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='condition'>
                    <span className='name'>
                        Needless To Say, You Should Be Familiar With :
                    </span>
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
                    Through :
                </h3>
                <div className='socials'>
                    <a href='' className='twitter'>
                        <FaTwitter />
                    </a>
                    <a href='' className='gmail'>
                        <SiGmail />
                    </a>
                    <a href='' className='discord'>
                        <SiDiscord />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JoinTeam
