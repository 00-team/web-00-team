import React, { FC, useEffect, useState } from 'react'

import Head from '../common/Head'

// import Select, { SelectInstance } from 'react-select'
// import { SelectTheme, SelectStyle } from '../utils'

// icons
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import { BsFilter } from '@react-icons/all-files/bs/BsFilter'
import { GoRepo } from '@react-icons/all-files/go/GoRepo'

// import { HexCloseIcon } from '../common/HexIcon'

// router
import { Link } from 'react-router-dom'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'
import { IMAGE_MIMETYPE, ProjectModel } from '../../redux/models/Projects'

// commons
import Loading from '../common/Loading'
import Button from '../common/Button'

// style
import './sass/projects.scss'

import Filters from './Filters'

const Projects: FC = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)
    const ProjectsData = useSelector(
        (state: RootState) => state.Projects.projects
    )
    const [ShowFilters, setShowFilters] = useState(false)
    const [isFilterd, setIsFilterd] = useState(false)
    // const [applayedfilters, setApplayedFilters] =
    //     useState<SelectedFiltersState>({})

    useEffect(() => {
        dispatch(GetProject())
    }, [dispatch])

    if (ProjectsState.loading) {
        return <Loading fixed={true} />
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
                        <button onClick={() => setShowFilters(true)}>
                            <BsFilter /> Filter
                        </button>
                    </div>
                </div>
                {/* 
                <Filters
                    close={() => setshowFilters(false)}
                    isActive={showFilters}
                    applayedFilters={applayedfilters}
                    setApplayedFilters={filters => setApplayedFilters(filters)}
                /> */}

                <Filters
                    show={ShowFilters}
                    close={() => setShowFilters(false)}
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

/*
interface FiltersProps {
    close: () => void
    isActive: boolean
    applayedFilters: SelectedFiltersState
    setApplayedFilters: (filters: SelectedFiltersState) => void
}





const Filters: FC<FiltersProps> = ({
    close,
    isActive,
    applayedFilters,
    setApplayedFilters,
}) => {
    const dispatch = useDispatch()


    
    
    // setSelectNodes
    console.log(SelectNodes.version)

    useEffect(() => {
        setFilters(applayedFilters)
    }, [applayedFilters, setFilters])

    

    return (
        
    )
}
 */
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
