import React from 'react'

// import scss
import './sass/herosection.scss'

// icons
// import { IconContext } from 'react-icons'
// import { FiGithub } from 'react-icons/fi'
// import { SiDiscord } from 'react-icons/si'

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='main'>
                <span>00 Team</span>
                <div className='social'>
                    {/* <SiDiscord
                            onClick={() =>
                                window.open('https://discord.gg/Z6vgXHU2xQ')
                            }
                        />
                        <FiGithub
                            onClick={() =>
                                window.open('https://github.com/00-team')
                            }
                        /> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
