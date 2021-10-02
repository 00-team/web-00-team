import React from 'react'

// link
import { Link } from 'react-router-dom'

// icons
// import { GiTeamIdea, GiFilmProjector } from 'react-icons/gi'
import { GiTeamIdea } from '@react-icons/all-files/gi/GiTeamIdea'
import { GiFilmProjector } from '@react-icons/all-files/gi/GiFilmProjector'

import { BsQuestionSquareFill } from '@react-icons/all-files/bs/BsQuestionSquareFill'

import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake'

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

                    <Link className='link' to='/projects'>
                        Projects
                        <div>
                            <GiFilmProjector size={28} />
                        </div>
                    </Link>
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
