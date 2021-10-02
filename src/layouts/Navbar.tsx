import React from 'react'

// link
import { Link } from 'react-router-dom'

// // icons
// import { GiTeamIdea, GiFilmProjector } from 'react-icons/gi'
// import { FaHandshake } from 'react-icons/fa'

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
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='22'
                                height='22'
                                fill='currentColor'
                                viewBox='0 0 16 16'
                            >
                                <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z' />
                            </svg>
                        </div>
                    </a>

                    <Link className='link' to='/projects'>
                        Projects
                        <div>{/* <GiFilmProjector size={28} /> */}</div>
                    </Link>
                    <a className='link'>
                        Creators
                        <div>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                            >
                                <path
                                    d='M256 16c-48 0-80 32-80 64 0 48 16 80 32 96v16h96v-16c16-16 32-48 32-96 0-32-32-64-80-64zm-63.6 65.33L256 102.5l63.6-21.17-39.2 97.97-16.8-6.6 24.8-62-32.4 10.8-32.4-10.8 24.8 62-16.8 6.6-39.2-97.97zm-83.3 79.07c-23.4 3-44.6 30.5-44.6 65.9 0 19.6 6.8 36.9 16.7 48.9l11.9 14.2-18.3 3.4c-12.9 2.5-22.3 9.3-30.4 20.4-8.1 11.1-14.3 26.5-18.6 44.4C18 389.8 16.2 429.2 16 464h42.8l2.24 30H169.6l2-30h40.8c0-35.2-.4-75.1-7.5-107.7-4-17.9-9.9-33.3-18.1-44.3-8.2-11-18.1-17.8-32.6-20l-18.5-2.9 11.7-14.7c9.5-11.9 15.9-29 15.9-48.1 0-37.8-23.6-65.8-49.4-65.8l-4.8-.1zm283.6 0c-23.4 3-44.6 30.5-44.6 65.9 0 19.6 6.8 36.9 16.7 48.9l11.9 14.2-18.3 3.4c-12.9 2.5-22.3 9.3-30.4 20.4-8.1 11.1-14.3 26.5-18.6 44.4-7.8 32.2-9.6 71.6-9.8 106.4h42.8l2.2 30h108.6l2-30H496c0-35.2-.4-75.1-7.5-107.7-4-17.9-9.9-33.3-18.1-44.3-8.2-11-18.1-17.8-32.6-20l-18.5-2.9 11.7-14.7c9.5-11.9 15.9-29 15.9-48.1 0-37.8-23.6-65.8-49.4-65.8l-4.8-.1zM208 209v18h96v-18h-96zm16 34v18h64v-18h-64z'
                                    fill='#fff'
                                    fill-opacity='1'
                                ></path>
                            </svg>
                        </div>
                    </a>
                    <a className='link'>
                        Wana Join?
                        <div>
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                stroke-width='0'
                                viewBox='0 0 640 512'
                                height='28px'
                                width='28px'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z'></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
