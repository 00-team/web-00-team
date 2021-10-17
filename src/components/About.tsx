import React, { FC } from 'react'
import Markdown from 'markdown-to-jsx'

// reudx
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// import scss
import './sass/about.scss'

const About: FC = () => {
    const BaseState = useSelector((state: RootState) => state.Base.base)

    if (!BaseState || !BaseState.about) return <></>

    // return <div style={{ color: 'red' }}>{BaseState.about.markdown}</div>
    return (
        <div className='about-container'>
            {/* <div className='part team'>
                <h1 className='title'>00 Team</h1>
                <span className='text'>believe your dreams</span>
            </div> */}
            <div className='part about'>
                <h2 className='title'>What is 00 Team?</h2>
                <div className='text'>
                    <Markdown>{BaseState.about.markdown}</Markdown>
                </div>
            </div>
        </div>
    )
}

export default About
