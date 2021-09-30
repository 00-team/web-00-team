import React, { useEffect, useRef } from 'react'

// lazy motion
import LazyMotion from './elements/LazyMotion'

// types
import { SCROLLTOP_JOIN } from '../redux/reducers/data/types'

// import css
import './sass/joinus.scss'

// icons
import { SiDiscord, SiGmail } from 'react-icons/si'
import { FaWhatsapp, FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'

// redux
import { useDispatch, useSelector } from 'react-redux'

function JoinUs() {
    const scrollTopState = useSelector(state => state.scrollTop)

    const dispatch = useDispatch()

    const title = useRef()

    const getScrollTop = () => {
        const scrollTop = title.current.scrollTop
        const offSet = title.current.offsetTop
        const result = offSet - scrollTop

        dispatch({ type: SCROLLTOP_JOIN, payload: result })
    }

    useEffect(() => {
        getScrollTop()
    }, [])

    return (
        <div className='join-us' id='join'>
            <div className='container' ref={title}>
                <LazyMotion>
                    <div className='header'>
                        <h1>Wana Join?</h1>
                    </div>
                </LazyMotion>
                <h2>contact us through:</h2>
                <div className='join'>
                    <ul className='social__list'>
                        <li>
                            <button
                                {...{ 'data-title': 'discord.gg/Z6vgXHU2xQ' }}
                                className='social__btn'
                                onClick={() =>
                                    window.open('https://discord.gg/Z6vgXHU2xQ')
                                }
                            >
                                <SiDiscord className='fab' />
                            </button>
                        </li>
                        <li>
                            <button
                                className='social__btn'
                                {...{ 'data-title': '00.team.mail@gmail.com' }}
                            >
                                <a href='mailto:00.team.mail@gmail.com'>
                                    <SiGmail className='fab' />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
