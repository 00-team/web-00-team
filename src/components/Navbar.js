import React, { useEffect, useState } from 'react'

// style
import './sass/navbar.scss'

const Navbar = () => {
    const [StyleState, setStyleState] = useState({})
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let style = { transform: 'translateY(0)', position: 'static' }

            if (window.scrollY > 70 && window.scrollY < 350) {
                style.position = 'fixed'
                style.transform = 'translateY(-70px)'

                if (window.oldScroll > window.scrollY) {
                    style.transition = 'transform 300ms'
                }
            }

            if (window.scrollY > 350) {
                style.position = 'fixed'
                style.transform = 'translateY(0)'
                style.transition = 'transform 300ms'
            }

            setStyleState(style)

            window.oldScroll = window.scrollY
        })
    }, [])

    return (
        <div className='navbar-container'>
            <nav className='navbar' style={StyleState}>
                {/* <div className='logo'>00</div> */}

                <div className='section'>
                    <a className='link' href='#00team'>
                        What is 00 Team
                    </a>
                    <a className='link' href='#creators'>
                        Creators
                    </a>
                    <a className='link' href='#projects'>
                        Projects
                    </a>
                    <a className='link' href='#join'>
                        Wana Join?
                    </a>
                </div>
                <div className='section'>
                    <span className='link'>Login</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
