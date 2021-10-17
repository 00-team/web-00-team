import React, { FC } from 'react'

import Loadable from '@loadable/component'

// redux stuff
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'

// import css
import './sass/creators.scss'

const Creators: FC = () => {
    const CreatorsState = useSelector((state: RootState) => state.Creators)

    if (CreatorsState.creators.length < 1) return <></>

    return (
        <div className='creators' id='creators'>
            <div className='container'>
                <LazyMotion>
                    <div className='header'>
                        <h1>Creators</h1>
                    </div>
                </LazyMotion>
                <div className='cards'>
                    {CreatorsState.creators.map((item, index) => {
                        return (
                            <div className='card' key={index}>
                                <div
                                    className='creator-img'
                                    style={
                                        item.bgColor
                                            ? {
                                                  backgroundColor:
                                                      item.bgColor.hex,
                                              }
                                            : { backgroundColor: 'red' }
                                    }
                                >
                                    <img
                                        src={
                                            item.picture
                                                ? item.picture.url
                                                : 'none'
                                        }
                                    />
                                </div>
                                <div className='text-container'>
                                    <h1 className='title'>{item.name}</h1>
                                    {item.duty.map((role, index) => (
                                        <h4 key={index} className='role'>
                                            {role}
                                        </h4>
                                    ))}

                                    <p className='description'>{item.bio}</p>
                                    <div
                                        className='social github'
                                        onClick={() =>
                                            window.open(
                                                `https://github.com/${item.githubUsername}`
                                            )
                                        }
                                    >
                                        Github <FiGithub />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Creators
