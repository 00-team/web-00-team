import React, { FC, useState, useEffect } from 'react'

// redux
import { RootState } from 'src/redux'
import { useSelector } from 'react-redux'

// link
import { Link, useLocation } from 'react-router-dom'

// icons
import { IconContext } from '@react-icons/all-files'
import { IoHome } from '@react-icons/all-files/io5/IoHome'
import { GiClown } from '@react-icons/all-files/gi/GiClown'
import { AiOutlineTeam } from '@react-icons/all-files/ai/AiOutlineTeam'
import { RiMoneyPoundBoxLine } from '@react-icons/all-files/ri/RiMoneyPoundBoxLine'
import { VscProject } from '@react-icons/all-files/vsc/VscProject'

// style
import './sass/navbar.scss'

const HexIcon: FC<React.SVGProps<SVGSVGElement>> = ({ className, ...attr }) => {
    return (
        <svg
            {...attr}
            viewBox='0 0 5.2 6'
            xmlns='http://www.w3.org/2000/svg'
            className={`hex-icon ${className ? className : ''}`}
        >
            <path d='M 2.6 0 L 5.2 1.5 L 5.2 4.5 L 2.6 6 L 0 4.5 L 0 1.5 Z' />
        </svg>
    )
}

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
        <div className='navbar__desktop'>
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

            <div
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
                    className={`close-btn`}
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
                    <HexIcon />
                </div>

                <h1
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
                </h1>
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
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <div className='section'>
                            <Link to='/'>
                                <Hex>
                                    <IoHome />
                                    <span>Home</span>
                                </Hex>
                            </Link>
                            <Link to='/projects'>
                                <Hex>
                                    <VscProject />
                                    <span>Projects</span>
                                </Hex>
                            </Link>
                            <Link to='/business'>
                                <Hex>
                                    <RiMoneyPoundBoxLine />
                                    <span>Business</span>
                                </Hex>
                            </Link>
                        </div>
                        <div className='section'>
                            <Link to='/team'>
                                <Hex>
                                    <AiOutlineTeam />
                                    <span>Team</span>
                                </Hex>
                            </Link>
                            <Link to='/fun'>
                                <Hex>
                                    <GiClown />
                                    <span>Fun</span>
                                </Hex>
                            </Link>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

            <div
                className={`overlay ${Active ? 'active' : ''}`}
                style={
                    Active ? {} : { transitionDelay: '1000ms' } // closing
                }
            ></div>
        </div>
    )
}

const MobileNavbar: FC = () => {
    return (
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
    )
}

const Navbar = () => {
    const WindowsWidth = useSelector((state: RootState) => state.App.winwid)

    return (
        <div className='navbar'>
            {WindowsWidth > 500 ? <DesktopNavbar /> : <MobileNavbar />}
        </div>
    )
}

export default Navbar
