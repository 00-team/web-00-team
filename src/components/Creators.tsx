import React, { FC, useState } from 'react'

// import Loadable from '@loadable/component'

// redux stuff
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// lazy motion
// const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// icons
// import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { HiOutlineArrowNarrowDown as Arrow } from '@react-icons/all-files/hi/HiOutlineArrowNarrowDown'

// import css
import './sass/creators.scss'

const Creator: FC = () => {
    const [ShowSocial, setShowSocial] = useState(false)
    return (
        <div className='creator'>
            <div className='banner'></div>
            <div className='social'>
                <div className='item'></div>
                <div className='item'></div>
            </div>
            <div
                className='info'
                style={
                    ShowSocial
                        ? { marginTop: 0, transform: 'translateY(50px)' }
                        : {}
                }
            >
                <div className='top'>
                    <div className='profile'></div>
                    <div className='meta'>
                        <span className='name'>007</span>
                        <span className='join-date'>2019</span>
                    </div>
                    <Arrow
                        onClick={() => setShowSocial(!ShowSocial)}
                        style={
                            ShowSocial ? { transform: 'rotate(180deg)' } : {}
                        }
                    />
                </div>
                <ul className='roles'>
                    <li className='role'>Team Master</li>
                    <li className='role'>Team Master</li>
                    <li className='role'>Team Master</li>
                </ul>

                <span className='quote'>time of Madness has come</span>
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
