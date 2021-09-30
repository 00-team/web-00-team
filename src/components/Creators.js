import React, { useEffect } from 'react'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadCreators from '../redux/actions/data/loadCreators'

// lazy motion
import LazyMotion from './elements/LazyMotion'

// elements
import Loading from './elements/Loading'

// icons
import { FiGithub } from 'react-icons/fi'

// import css
import './sass/creators.scss'

const Creators = ({ loadingRender }) => {
    const CreatorsState = useSelector(state => state.Creators)
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
                                    style={{
                                        backgroundColor: item.bgColor.hex,
                                    }}
                                >
                                    <img src={item.picture.url} />
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
                                        onClick={e =>
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

Creators.defaultProps = {
    loadingRender: true,
}

export default Creators
