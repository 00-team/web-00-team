import React, { useEffect, useState } from 'react'

// redux
import { useSelector } from 'react-redux'

// link
import { Link } from 'react-router-dom'

// icons
import { BsQuestionSquareFill } from 'react-icons/bs'
import { GiTeamIdea, GiFilmProjector } from 'react-icons/gi'
import { FaHandshake } from 'react-icons/fa'

// style
import './sass/navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                {/* <div className='logo'>00</div>*/}

                <div className='section'>
                    <a className='link'>
                        What is 00 Team
                        <div>
                            <BsQuestionSquareFill size={22} />
                        </div>
                    </a>

                    <a className='link'>
                        Projects
                        <div>
                            <GiFilmProjector size={28} />
                        </div>
                    </a>
                    <a className='link'>
                        Creators
                        <div>
                            <GiTeamIdea size={28} />
                        </div>
                    </a>
                    <a className='link'>
                        Wana Join?
                        <div>
                            <FaHandshake size={28} />
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
