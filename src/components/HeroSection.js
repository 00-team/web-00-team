import React from 'react'

// import css 
import "./sass/herosection.scss"

// icons
import { FiGithub } from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si'


function HeroSection() {
    return (
      <div className="hero-section">
        <div className="main">
          <span>00 Team</span>
          <div className="social">
            <SiDiscord
              onClick={(e) => window.open("https://discord.gg/Z6vgXHU2xQ")}
            />
            <FiGithub
              onClick={(e) => window.open("https://github.com/00-team")}
            />
          </div>
        </div>
      </div>
    );
}

export default HeroSection
