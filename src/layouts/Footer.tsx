import React from 'react'

import { Link } from 'react-router-dom'

// btn comp
import Button from '../components/common/Button'

// styling
import './sass/footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Wana Work With Us?
                </p>
                <p className='footer-subscription-text'>
                    Provided You Think You Are Good Enough To Work With 00 Team,
                    You Can Apply From The Button Below.
                </p>
                <div className='footer-input'>
                    <a href='/team#join-team'>
                        <Button children='Join 00 Team' />
                    </a>
                </div>
            </section>
            <div className='line'></div>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link className='links' to='/'>
                            How it works
                        </Link>
                        <Link className='links' to='/'>
                            Testimonials
                        </Link>
                        <Link className='links' to='/'>
                            Careers
                        </Link>
                        <Link className='links' to='/'>
                            Investors
                        </Link>
                        <Link className='links' to='/'>
                            Terms of Service
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link className='links' to='/'>
                            Discord
                        </Link>
                        <Link className='links' to='/'>
                            Gmail
                        </Link>
                        <Link className='links' to='/'>
                            Github
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Projects</h2>
                        <Link className='links' to='/'>
                            Demos
                        </Link>
                        <Link className='links' to='/'>
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>
                        00 Team © {new Date().getFullYear()}
                    </small>
                </div>
            </section>
        </div>
    )
}

export default Footer
