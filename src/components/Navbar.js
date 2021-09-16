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
                    <span className='link'>What is 00 Team</span>
                    <span className='link'>Creators</span>
                    <span className='link'>Projects</span>
                    <span className='link'>Wana Join?</span>
                </div>
                <div className='section'>
                    <span className='link'>Login</span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
