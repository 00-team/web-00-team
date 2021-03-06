import React, { FC, useState, useEffect } from 'react'

// redux
import { RootState } from 'src/redux'
import { useSelector } from 'react-redux'

// link
import { Link, useLocation } from 'react-router-dom'

// icons
// import { IconContext } from '@react-icons/all-files'
import { IoHome } from '@react-icons/all-files/io5/IoHome'
import { GiClown } from '@react-icons/all-files/gi/GiClown'
import { AiOutlineTeam } from '@react-icons/all-files/ai/AiOutlineTeam'
import { RiMoneyPoundBoxLine } from '@react-icons/all-files/ri/RiMoneyPoundBoxLine'
import { VscProject } from '@react-icons/all-files/vsc/VscProject'

import { HexIcon, HexCloseIcon } from '../components/common/HexIcon'

// style
import './sass/navbar.scss'

const Hex: FC = ({ children }) => {
    return (
        <div className='hex'>
            <div className='borders'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <HexIcon />

            {children}
        </div>
    )
}

const DesktopNavbar: FC = () => {
    const [Active, setActive] = useState(false)
    const location = useLocation()
    const MenuDelay = 300

    useEffect(() => {
        setActive(false)
    }, [location])

    return (
        <nav className='navbar__desktop'>
            <div
                className={`btn ${Active ? 'active' : ''}`}
                onClick={() => setActive(true)}
                style={
                    Active
                        ? { /* opening */ transitionDelay: `${MenuDelay}ms` }
                        : { /* closing */ transitionDelay: '600ms' }
                }
            >
                <HexIcon
                    style={
                        Active
                            ? {
                                  /* opening */ transitionDelay: `${
                                      MenuDelay + 500
                                  }ms`,
                              }
                            : { /* closing */ transitionDelay: '200ms' }
                    }
                />
                <div className='overflow-protection'>
                    <div className='lines'>
                        <div className='line'>
                            <div className='line__inner' />
                        </div>
                        <div className='line'>
                            <div
                                className='line__inner'
                                style={{ transitionDelay: '100ms' }}
                            />
                        </div>
                        <div className='line'>
                            <div
                                className='line__inner'
                                style={{ transitionDelay: '200ms' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section
                className={`menu ${Active ? 'active' : ''}`}
                style={
                    Active
                        ? {
                              /* opening */ transitionDelay: `${
                                  MenuDelay + 700
                              }ms`,
                          }
                        : { /* closing */ transitionDelay: '700ms' }
                }
            >
                <div
                    className='close-btn'
                    onClick={() => setActive(false)}
                    style={
                        Active
                            ? {
                                  /* opening */ transitionDelay: `${
                                      MenuDelay + 700
                                  }ms`,
                              }
                            : { /* closing */ transitionDelay: '200ms' }
                    }
                >
                    <HexCloseIcon />
                </div>

                <h2
                    style={
                        Active
                            ? {
                                  /* opening */ transitionDelay: `${
                                      MenuDelay + 700
                                  }ms`,
                              }
                            : { /* closing */ transitionDelay: '200ms' }
                    }
                >
                    00 Team
                </h2>
                <div
                    className='links'
                    style={
                        Active
                            ? {
                                  /* opening */ transitionDelay: `${
                                      MenuDelay + 500
                                  }ms`,
                              }
                            : {}
                    }
                >
                    <div className='section'>
                        <Link to='/'>
                            <Hex>
                                <div className='icon'>
                                    <IoHome />
                                </div>

                                <span>Home</span>
                            </Hex>
                        </Link>
                        <Link to='/projects'>
                            <Hex>
                                <div className='icon'>
                                    <VscProject />
                                </div>
                                <span>Projects</span>
                            </Hex>
                        </Link>
                        <Link to='/business'>
                            <Hex>
                                <div className='icon'>
                                    <RiMoneyPoundBoxLine />
                                </div>

                                <span>Business</span>
                            </Hex>
                        </Link>
                    </div>
                    <div className='section'>
                        <Link to='/team'>
                            <Hex>
                                <div className='icon'>
                                    <AiOutlineTeam />
                                </div>

                                <span>Team</span>
                            </Hex>
                        </Link>
                        <Link to='/fun'>
                            <Hex>
                                <div className='icon'>
                                    <GiClown />
                                </div>

                                <span>Fun</span>
                            </Hex>
                        </Link>
                    </div>
                </div>
            </section>

            <div
                className={`overlay ${Active ? 'active' : ''}`}
                style={
                    Active ? {} : { transitionDelay: '1000ms' } // closing
                }
            ></div>
        </nav>
    )
}

const MobileNavbar: FC = () => {
    return (
        <nav className='navbar__mobile-container'>
            <div className='navbar__mobile'>
                <Link to='/team'>
                    <AiOutlineTeam />
                </Link>
                <Link to='/projects'>
                    <VscProject />
                </Link>
                <Link to='/'>
                    <IoHome />
                </Link>
                <Link to='/business'>
                    <RiMoneyPoundBoxLine />
                </Link>
                <Link to='/fun'>
                    <GiClown />
                </Link>
            </div>
        </nav>
    )
}

const Navbar = () => {
    const WindowsWidth = useSelector((state: RootState) => state.App.winwid)

    return <>{WindowsWidth > 500 ? <DesktopNavbar /> : <MobileNavbar />}</>
}

export default Navbar
