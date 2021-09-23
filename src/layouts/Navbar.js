import React, { useEffect, useState } from 'react'

// link
import { Link } from 'react-router-dom'

// style
import './sass/navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                {/* <div className='logo'>00</div>*/}

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
                <div className='section auth'></div>
            </nav>
        </div>
    )
}

export default Navbar
