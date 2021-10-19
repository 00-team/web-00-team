import React, { FC } from 'react'

import Loadable from '@loadable/component'

import Markdown from 'markdown-to-jsx'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// icons
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

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
                    <span className='name'>Needless To Say, You Should Be Familiar With :</span>
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
                <h3 className='title'>if you have ...</h3>
                <span>contact us</span>
                <div className='socials'>
                    <a href=''>
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JoinTeam
