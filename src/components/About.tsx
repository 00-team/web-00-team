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

    return (
        <section className='about-container' aria-label='about 00 team'>
            <div className='part about'>
                <LazyMotion>
                    <h2 className='title'>What is 00 Team?</h2>
                </LazyMotion>
                <section className='text' aria-label='about 00 Team'>
                    <Markdown>{BaseState.about.markdown}</Markdown>
                </section>
            </div>
        </section>
    )
}

export default About
