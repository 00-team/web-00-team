import React from 'react'

// import css
import './sass/joinus.scss'

// icons
import { SiDiscord, SiGmail } from 'react-icons/si'
import { FaWhatsapp, FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'

function JoinUs() {
    return (
        <div className='join-us' id='join'>
            <div className='container'>
                <div className='header'>
                    <h1>Wana Join?</h1>
                </div>
                <h2>contact us through:</h2>
                <div className='join'>
                    {/*<div className='gmail'>
                        <SiGmail size={70}/>
                    </div>
                    <div className='discord'>
                        <SiDiscord />
                    </div> */}
                    <ul className='social__list'>
                        <li className='social__item'>
                            <button
                                className='social-btn discord'
                                onClick={e =>
                                    window.open('https://discord.gg/nux2MBcjPD')
                                }
                            >
                                <div className='tooltip'>
                                    discord.gg/nux2MBcjPD
                                </div>
                                <SiDiscord className='fab' />
                            </button>
                        </li>
                        <li className='social__item'>
                            <button className='social-btn gmail'>
                                <div className='tooltip'>
                                    00.team.mail@gmail.com
                                </div>
                                <a
                                    href='mailto:mahmodrizband@gmail.com'
                                    target='_blank'
                                ></a>
                                <SiGmail className='fab' />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
