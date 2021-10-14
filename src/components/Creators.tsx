import React, { useEffect } from 'react'

import Loadable from '@loadable/component'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadCreators from '../redux/actions/loadCreators'
import { RootState } from '../redux'

// lazy motion
// import LazyMotion from

const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// elements
import Loading from './common/Loading'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'

// import css
import './sass/creators.scss'

interface CreatorsProps {
    loadingRender?: boolean
}

const defaultProps: CreatorsProps = {
    loadingRender: true,
}

const Creators = ({ loadingRender }: CreatorsProps) => {
    const CreatorsState = useSelector((state: RootState) => state.Creators)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCreators())
    }, [dispatch])

    if (CreatorsState.error) {
        return <span>Error</span>
    }

    if (CreatorsState.loading && loadingRender) {
        return <Loading />
    }

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

Creators.defaultProps = defaultProps

export default Creators
