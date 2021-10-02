import React from 'react'

// link
import { Link } from 'react-router-dom'
import {
    FilmProjector,
    HandShake,
    QuestionMark,
    TeamIdea,
} from '../components/common/Icons'

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
                            <QuestionMark size={22} />
                        </div>
                    </a>

                    <Link className='link' to='/projects'>
                        Projects
                        <div>
                            <FilmProjector />
                        </div>
                    </Link>
                    <a className='link'>
                        Creators
                        <div>
                            <TeamIdea />
                        </div>
                    </a>
                    <a className='link'>
                        Wana Join?
                        <div>
                            <HandShake size={28} />
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
