import React, { useEffect, useState } from 'react'

// redux 
import { useSelector } from 'react-redux';

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

    const elementsScrollTop = useSelector(state => state.scrollTop)

    const scrollToProjects = () =>{
        window.scrollTo({
            top: elementsScrollTop.projects - 100,
            behavior: 'smooth',
        })
    }
    const scrollToCreators= () =>{
        window.scrollTo({
            top: elementsScrollTop.creators - 100,
            behavior: 'smooth',
        })
    }
    
    const scrollToJoin = () => {
        window.scrollTo({
            top: elementsScrollTop.join - 100,
            behavior: 'smooth',
        })
    }

    const scrollToAbout = () => {
        window.scrollTo({
            top: elementsScrollTop.about - 100,
            behavior: 'smooth',
        })
    }

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                {/* <div className='logo'>00</div>*/}

                <div className='section'>
                    <a className='link' onClick={scrollToAbout}>
                        What is 00 Team{' '}
                        <div className='icon'>
                            {' '}
                            <BsQuestionSquareFill size={28} />
                        </div>
                    </a>
                    <a className='link' onClick={scrollToCreators}>
                        Creators{' '}
                        <div className='icon'>
                            <GiTeamIdea size={28} />
                        </div>
                    </a>
                    <a className='link' onClick={scrollToProjects}>
                        Projects{' '}
                        <div className='icon'>
                            <GiFilmProjector size={28} />
                        </div>
                    </a>
                    <a className='link' onClick={scrollToJoin}>
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
