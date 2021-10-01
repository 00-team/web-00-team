import React, { useEffect } from 'react'

// markdowm
import Markdown from 'markdown-to-jsx'

// reudx
import { useSelector, useDispatch } from '../redux/hooks'
import loadBase from '../redux/actions/data/loadBase'

// elements
import Loading from './elements/Loading'

// import scss
import './sass/about.scss'

interface AboutProps {
    loadingRender: boolean
}

const About = ({ loadingRender }: AboutProps) => {
    const dispatch = useDispatch()
    const BaseState = useSelector(state => state.Base)

    useEffect(() => {
        dispatch(loadBase())
    }, [])

    if (BaseState.loading && loadingRender) return <Loading />

    return (
        <div className='about' id='00team'>
            <div className='container'>
                <div className='header'>
                    <h1>what is 00 team</h1>
                </div>

                <div className='description'>
                    <div className='about-us-text'>
                        {BaseState.base && (
                            <Markdown>{BaseState.base.about.markdown}</Markdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

About.defaultProps = {
    loadingRender: true,
}

export default About
