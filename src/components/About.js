import React, { useEffect, useRef } from 'react'

// markdowm
import Markdown from 'markdown-to-jsx'
// reudx
import { useSelector, useDispatch } from 'react-redux'
import loadBase from '../redux/actions/data/loadBase'

// import scss
import './sass/about.scss'

const About = () => {
    const dispatch = useDispatch()
    const BaseState = useSelector(state => state.Base.base)

    useEffect(() => {
        dispatch(loadBase())
    }, [])

    if (!BaseState || !BaseState.about || !BaseState.about.markdown)
        return <></>

    return (
        <div className='about' id='00team'>
            <div className='container'>
                <div className='header'>
                    <h1>what is 00 team</h1>
                </div>

                <div className='description'>
                    <div className='about-us-text'>
                        <Markdown>{BaseState.about.markdown}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
