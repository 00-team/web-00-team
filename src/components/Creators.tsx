import React, { FC, useState } from 'react'

import Loadable from '@loadable/component'

// redux stuff
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import { CreatorModel } from '../redux/models/Creators'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'

// import css
import './sass/creators.scss'

const Creator: FC<{ C: CreatorModel }> = ({ C }) => {
    const [ProfileZoom, setProfileZoom] = useState(false)
    const [showDetails, setshowDetails] = useState(false)
    return (
        <section
            className='creator'
            onClick={() => setshowDetails(!showDetails)}
        >
            <div
                className='banner'
                style={
                    ProfileZoom
                        ? { backgroundImage: `url(${C.profile.url})` }
                        : { backgroundImage: `url(${C.banner.url})` }
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
                        {C.roles.map((role, index) => (
                            <li className='role' key={index}>
                                {role}
                            </li>
                        ))}
                    </ul>
                    {C.quote && (
                        <div className='quote'>
                            <em>{C.quote}</em>
                        </div>
                    )}
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
                    style={{ backgroundImage: `url(${C.profile.url})` }}
                ></div>
                <div className='meta'>
                    <h3 className='name' title={C.name}>
                        {C.name}
                    </h3>
                    <span className='date'>
                        {C.joinDate.slice(0, C.joinDate.search('-'))}
                    </span>
                </div>
            </div>
            <div className='socials'>
                {C.githubUsername && (
                    <a
                        href={`https://github.com/${C.githubUsername}`}
                        className='social'
                        style={
                            { '--hover-color': '#333' } as React.CSSProperties
                        }
                    >
                        <FiGithub />
                    </a>
                )}
                {C.twitterUsername && (
                    <a
                        href={`https://twitter.com/${C.twitterUsername}`}
                        className='social'
                        style={
                            {
                                '--hover-color': '#1da1f2',
                            } as React.CSSProperties
                        }
                    >
                        <FiTwitter />
                    </a>
                )}
            </div>
        </section>
    )
}

interface CreatorsProps {
    ExtraClass?: String
}

const Creators: FC<CreatorsProps> = ({ ExtraClass }) => {
    const CreatorsState = useSelector((state: RootState) => state.Creators)

    if (CreatorsState.creators.length < 1) return <></>

    return (
        <section className={`creators-container ${ExtraClass}`}>
            <LazyMotion>
                <h2 className='title'>Creators</h2>
            </LazyMotion>
            <div className='creators'>
                {CreatorsState.creators.map((item, index) => (
                    <Creator C={item} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Creators
