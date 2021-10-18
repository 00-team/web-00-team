import React from 'react';

import { Link } from 'react-router-dom';


// styling
import './sass/footer.scss';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation
                    deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='footer-input'>
                    <button>test</button>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link className='links' to='/sign-up'>
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
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            00 Team
                            {/* <i className='fab fa-typo3' /> */}
                        </Link>
                    </div>
                    <small className='website-rights'>© 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            {/* <i className='fab fa-facebook-f' /> */}
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            {/* <i className='fab fa-instagram' /> */}
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            {/* <i className='fab fa-youtube' /> */}
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            {/* <i className='fab fa-twitter' /> */}
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            {/* <i className='fab fa-linkedin' /> */}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
