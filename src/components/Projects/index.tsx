import React, { FC, useEffect, useState } from 'react'

// helmet
import { Helmet } from 'react-helmet'

// icons
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { BsFilter } from '@react-icons/all-files/bs/BsFilter'

import { HexCloseIcon } from '../common/HexIcon'
// router
// import { Link } from 'react-router-dom'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'

// commons
import Loading from '../common/Loading'

// style
import './sass/projects.scss'

const Projects: FC = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)
    const [showFilters, setshowFilters] = useState(true)

    useEffect(() => {
        dispatch(GetProject())
    }, [dispatch])

    if (ProjectsState.loading) {
        return <Loading />
    }

    if (!ProjectsState.projects) return <></>

    return (
        <div className='projects-container'>
            <Helmet>
                <meta property='og:title' content='00 Team Projects' />

                <meta
                    property='og:url'
                    content='https://web-00-team.web.app/projects/'
                />
                <meta
                    property='og:description '
                    content='00 Team Awesome Projects'
                />

                <meta
                    name='keywords'
                    content='00 Team Projects,github 00 Team,00 Team Projects Page,00 Team'
                />

                <title>00 Team Projects</title>
            </Helmet>
            <div className='projects'>
                <div className='top'>
                    <h1 className='title'>00 Team Projects</h1>
                    <div className='search'>
                        <div className='input'>
                            <input type='text' defaultValue='test' />
                            <div className='icon'>
                                <FiSearch />
                            </div>
                        </div>
                    </div>
                    <div className='filter'>
                        <button onClick={() => setshowFilters(true)}>
                            <BsFilter /> Filter
                        </button>
                    </div>
                </div>

                <Filters
                    close={() => setshowFilters(false)}
                    isActive={showFilters}
                />
            </div>
        </div>
    )
}

interface FiltersProps {
    close: () => void
    isActive: boolean
}

const Filters: FC<FiltersProps> = ({ close, isActive }) => {
    return (
        <div
            className='filters-container'
            style={isActive ? { transform: 'translateX(0%)' } : {}}
        >
            <div className={`close-btn`} onClick={() => close()}>
                <HexCloseIcon></HexCloseIcon>
            </div>
        </div>
    )
}

export default Projects
