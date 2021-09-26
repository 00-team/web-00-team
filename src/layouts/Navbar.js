import React, { useEffect, useState } from 'react'

// link
import { Link } from 'react-router-dom'

// icons 
import { GrProjects } from 'react-icons/gr';
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
                    <a className='link' href='#00team'>
                        What is 00 Team{' '}
                        <div className='icon'>
                            {' '}
                            <BsQuestionSquareFill size={28} />
                        </div>
                    </a>
                    <a className='link' href='#creators'>
                        Creators{' '}
                        <div className='icon'>
                            <GiTeamIdea size={28} />
                        </div>
                    </a>
                    <a className='link' href='#projects'>
                        Projects{' '}
                        <div className='icon'>
                            <GiFilmProjector size={28} />
                        </div>
                    </a>
                    <a className='link' href='#join'>
                        Wana Join?{' '}
                        <div className='icon'>
                            <FaHandshake size={28} />
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
