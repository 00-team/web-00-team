import React, { useState } from 'react'

// link
import { Link } from 'react-router-dom'

// icons
// import { GiTeamIdea, GiFilmProjector } from 'react-icons/gi'
import { IoHome } from '@react-icons/all-files/io5/IoHome'

import { GiTeamIdea } from '@react-icons/all-files/gi/GiTeamIdea'
import { GiFilmProjector } from '@react-icons/all-files/gi/GiFilmProjector'

import { BsQuestionSquareFill } from '@react-icons/all-files/bs/BsQuestionSquareFill'

import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'

//mobile icons
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'

// style
import './sass/navbar.scss'

const Navbar = () => {

    const [click, setClick] = useState<boolean>(false)

    //mobile functions
    const toggleNavbar = () => setClick(!click)
    const closeMoblieMenu = () => setClick(false)

    //

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                {/* <div className='logo'>00</div>*/}

                <div className='menu-icon' onClick={toggleNavbar}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`section ${click ? 'active' : ''}`}>
                    <Link className='link' to='/' onClick={closeMoblieMenu}>
                        Home
                        <div className='navbar-icon'>
                            <IoHome size={22} />
                        </div>
                    </Link>

                    <Link
                        className='link'
                        to='/about'
                        onClick={closeMoblieMenu}
                    >
                        What is 00 Team
                        <div className='navbar-icon'>
                            <BsQuestionSquareFill size={22} />
                        </div>
                    </Link>

                    <Link
                        className='link'
                        to='/projects'
                        onClick={closeMoblieMenu}
                    >
                        Projects
                        <div className='navbar-icon'>
                            <GiFilmProjector size={28} />
                        </div>
                    </Link>
                    <Link
                        className='link'
                        to='/creators'
                        onClick={closeMoblieMenu}
                    >
                        Creators
                        <div className='navbar-icon'>
                            <GiTeamIdea size={28} />
                        </div>
                    </Link>
                    <Link
                        className='link'
                        to='/wanajoin'
                        onClick={closeMoblieMenu}
                    >
                        Wana Join?
                        <div className='navbar-icon'>
                            <FaHandshake size={28} />
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
