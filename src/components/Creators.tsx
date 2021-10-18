import React, { FC, useState } from 'react'

// import Loadable from '@loadable/component'

// redux stuff
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// lazy motion
// const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'

// import css
import './sass/creators.scss'

const Creator: FC = () => {
    const [ProfileZoom, setProfileZoom] = useState(false)
    const [showDetails, setshowDetails] = useState(true)
    return (
        <div className='creator' onClick={() => setshowDetails(!showDetails)}>
            <div
                className='banner'
                style={
                    ProfileZoom
                        ? {
                              backgroundImage:
                                  'url(https://cdn.discordapp.com/attachments/731174051170746500/836798695139573840/007_logo_f27.png)',
                          }
                        : {}
                }
            ></div>
            <div className='details-container'>
                <div
                    className='details'
                    style={
                        showDetails ? { transform: 'translateY(-100%)' } : {}
                    }
                >
                    <ul className='roles'>
                        <li className='role'>Master</li>
                        <li className='role'>Master</li>
                        <li className='role'>Master Master Master Master </li>
                    </ul>
                    <div className='quote'>
                        <em>time of madness has come</em>
                    </div>
                </div>
            </div>
            <div className='info'>
                <div
                    className='profile'
                    onMouseOver={() => {
                        setProfileZoom(true)
                        setshowDetails(false)
                    }}
                    onMouseLeave={() => setProfileZoom(false)}
                ></div>
                <div className='meta'>
                    <span className='name'>007</span>
                    <span className='date'>2019</span>
                </div>
            </div>
            <div className='socials'>
                <a
                    href=''
                    className='social'
                    style={{ '--hover-color': '#333' } as React.CSSProperties}
                >
                    <FiGithub />
                </a>
                <a
                    href=''
                    className='social'
                    style={
                        { '--hover-color': '#1da1f2' } as React.CSSProperties
                    }
                >
                    <FiTwitter />
                </a>
            </div>
        </div>
    )
}

const Creators: FC = () => {
    const CreatorsState = useSelector((state: RootState) => state.Creators)

    console.log(CreatorsState)

    // if (CreatorsState.creators.length < 1) return <></>

    return (
        <div className='creators-container'>
            <h2 className='title'>Creators</h2>
            <div className='creators'>
                <Creator />
            </div>
        </div>
    )
}

export default Creators
