import React from 'react'

// import scss
import './sass/herosection.scss'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { SiDiscord } from '@react-icons/all-files/si/SiDiscord'

function HeroSection() {
    return (
        <section className='hero-section'>
            <div className='main'>
                <h1>00 Team</h1>
                <div className='social'>
                    <SiDiscord
                        onClick={() =>
                            window.open('https://discord.gg/Z6vgXHU2xQ')
                        }
                    />
                    <FiGithub
                        onClick={() =>
                            window.open('https://github.com/00-team')
                        }
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
