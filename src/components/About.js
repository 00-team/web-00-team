import React, { useEffect, useRef } from 'react'

// lazy motion 
import LazyMotion from './elements/LazyMotion'

// markdowm
import Markdown from 'markdown-to-jsx'
// reudx
import { useSelector, useDispatch } from 'react-redux'
import loadBase from '../redux/actions/data/loadBase'

// import scss
import './sass/about.scss'

// type 
import { SCROLLTOP_ABOUT } from '../redux/reducers/data/types'

const About = () => {
    // load about text

    // const BaseState = useSelector(state => state.Base.base)

    
    // useEffect(() => {
    //     dispatch(loadBase())
    // }, [])
    
    
    // if (!BaseState || !BaseState.about || !BaseState.about.markdown)
    //     return <></>
    
    // ref for scroll redux
    
    const title = useRef()
    const dispatch = useDispatch()

    const getScrollTop = () => {
        const scrollTop = title.current.scrollTop
        const offSet = title.current.offsetTop
        const result = offSet - scrollTop

        dispatch({ type: SCROLLTOP_ABOUT, payload: result })
    }

    useEffect(() => {
        getScrollTop()
    }, [])

    return (
        <div className='about' id='00team'>
            <div className='container' ref={title}>
                <LazyMotion>
                    <div className='header'>
                        <h1>what is 00 team</h1>
                    </div>
                </LazyMotion>

                <div className='description'>
                    <div className='about-us-text'>
                        {/* <Markdown>{BaseState.about.markdown}</Markdown> */}
                        <p>
                            00 Team is an Iranian, organized company that
                            started its work in 2019. <br />
                            We have several achievements on Fivem Scripts
                            development and has worked mostly on Web
                            Development.
                            <br />
                            Some of our works are for example writing HUDs,
                            Score Board Menus, and so on.
                            <br />
                            our customers were many popular Fivem Iranian
                            servers like: "Phonixe rp","moonlight rp", "justice
                            city",...
                            <br />
                            Nevertheless, You Can Check Out Our Website, We Have
                            All Of Our Projects Organized There For You. <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
