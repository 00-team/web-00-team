import React, { FC, useEffect, useState } from 'react'

import Head from '../common/Head'

// icons
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { BsFilter } from '@react-icons/all-files/bs/BsFilter'
import { GoRepo } from '@react-icons/all-files/go/GoRepo'

import { HexCloseIcon } from '../common/HexIcon'

// router
import { Link } from 'react-router-dom'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'
import { IMAGE_MIMETYPE, ProjectModel } from '../../redux/models/Projects'

// commons
import Loading from '../common/Loading'

// style
import './sass/projects.scss'
import Button from '../common/Button'

const Projects: FC = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)
    const ProjectsData = useSelector(
        (state: RootState) => state.Projects.projects
    )
    const [showFilters, setshowFilters] = useState(false)
    const [isFilterd, setIsFilterd] = useState(false)

    useEffect(() => {
        dispatch(GetProject())
    }, [dispatch])

    if (ProjectsState.loading) {
        return <Loading />
    }

    return (
        <div className='projects-container'>
            <Head
                title='00 Team Projects'
                description='00 Team Awesome Projects'
                url='https://web-00-team.web.app/projects/'
                keywords='00 Team Projects,github 00 Team,00 Team Projects Page,00 Team'
            />
            <div className='projects'>
                <div className='top'>
                    <h1 className='title'>00 Team Projects</h1>

                    <Search onSearch={() => setIsFilterd(true)} />
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

                {ProjectsData.length <= 0 ? (
                    <div className='no-result'>
                        <h2 className='title'>No Result Found</h2>
                        {isFilterd && (
                            <Button
                                children='Back'
                                onClick={() => dispatch(GetProject())}
                            />
                        )}
                    </div>
                ) : (
                    <div className='cards'>
                        {ProjectsData.map((item, index) => (
                            <ProjectCard {...item} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

interface FiltersProps {
    close: () => void
    isActive: boolean
}

const Search: FC<{ onSearch: () => void }> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='search'>
            <div className='input'>
                <input
                    type='text'
                    placeholder='Search For Porjects'
                    onChange={e => setInputValue(e.target.value)}
                />
                <div
                    className='icon'
                    onClick={() => {
                        dispatch(
                            GetProject({ where: `{_search: "${inputValue}"}` })
                        )
                        onSearch()
                    }}
                >
                    <FiSearch />
                </div>
            </div>
        </div>
    )
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

interface ProjectCardProps extends ProjectModel {}

const ProjectCard: FC<ProjectCardProps> = props => {
    const { title, version, startDate, git } = props
    const { thumbnail, projectSlug, projectStatus } = props
    const tags = Array.from(new Set(props.projectTags))

    if (!IMAGE_MIMETYPE.includes(thumbnail.mimeType)) return <></>

    return (
        <Link to={`/project/${projectSlug}/`} title={title}>
            <div className='project-card'>
                <div className='tumbnail'>
                    <img src={thumbnail.url} alt={`${title} thumbnail`} />
                    <ul className='tags'>
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                onClick={() => console.log(tag)}
                                title={tag}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <span className='version' title={version}>
                        {version}
                    </span>
                </div>
                <div className='info'>
                    <div className='top'>
                        <span className='title' title={title}>
                            {title}
                        </span>
                        {git && (
                            <div
                                className='icon'
                                title='This project is public'
                            >
                                <GoRepo />
                            </div>
                        )}
                    </div>
                    <div className='bottom'>
                        <span>{projectStatus}</span>
                        <span>{startDate}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Projects
