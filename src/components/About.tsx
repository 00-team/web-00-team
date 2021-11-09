import React, { FC } from 'react'
import Markdown from 'markdown-to-jsx'

// reudx
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

import Loadable from '@loadable/component'
// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// import scss
import './sass/about.scss'

const About: FC = () => {
    const BaseState = useSelector((state: RootState) => state.Base.base)

    if (!BaseState || !BaseState.about) return <></>

    // return <div style={{ color: 'red' }}>{BaseState.about.markdown}</div>
    return (
        <section className='about-container'>
            <div className='part about'>
                <LazyMotion>
                    <h2 className='title'>What is 00 Team?</h2>
                </LazyMotion>
                <div className='text'>
                    <Markdown>{BaseState.about.markdown}</Markdown>
                </div>
            </div>
        </section>
    )
}

export default About
