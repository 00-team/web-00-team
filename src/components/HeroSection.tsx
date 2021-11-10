import React from 'react'

// import scss
import './sass/herosection.scss'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { SiDiscord } from '@react-icons/all-files/si/SiDiscord'

function HeroSection() {
    return (
        <section className='hero-section' aria-label='hero section'>
            <div className='main'>
                <h1>00 Team</h1>
                <div className='social'>
                    <SiDiscord
                        onClick={() =>
                            window.open('https://discord.gg/Z6vgXHU2xQ')
                        }
                        tabIndex={0}
                        title='discord'
                        role='link'
                    />
                    <FiGithub
                        onClick={() =>
                            window.open('https://github.com/00-team')
                        }
                        tabIndex={0}
                        title='github'
                        role='link'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
