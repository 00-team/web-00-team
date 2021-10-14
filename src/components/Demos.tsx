import React, { useEffect, useState } from 'react'

import Loadable from '@loadable/component'

import Markdown from 'markdown-to-jsx'

// lazy motion
const LazyMotion = Loadable(() => import('./common/LazyMotion'))

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../redux/actions/loadProjects'
import { RootState } from '../redux'
import { ProjectModel } from 'src/redux/models/Projects'

// commons
import Loading from './common/Loading'
import Button, { ButtonWithArrow } from './common/Button'

// slider
const CardSlider = Loadable(() => import('./common/slider/CardSlider'))

// import style
import './sass/demos.scss'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { ImArrowUp2 } from '@react-icons/all-files/im/ImArrowUp2'
// import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight'

// local functions
const go = (url?: string | URL | undefined) => window.open(url)

interface ProjectsProps {
    loadingRender?: boolean
}

const defaultProps: ProjectsProps = {
    loadingRender: true,
}

function Projects({ loadingRender }: ProjectsProps) {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)
    const [ProjectsItem, setProjectsItem] = useState<ProjectModel[]>([])

    const [isActive, setisActive] = useState('')

    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    useEffect(() => {
        if (ProjectsState.projects.length > 0) {
            setProjectsItem(ProjectsState.projects)
        }
    }, [ProjectsState])

    if (ProjectsState.error) {
        return <span>Error Acquired {ProjectsState.error}</span>
    }

    if (ProjectsState.loading && loadingRender) {
        return <Loading />
    }

    if (ProjectsItem.length === 0) return <></>

    return (
        <div className='projects-in-main'>
            <div className='container'>
                <LazyMotion>
                    <div className='header'>
                        <h1>Projects</h1>
                    </div>
                </LazyMotion>
                <div className='project-slider'>
                    <CardSlider onChange={() => setisActive('')}>
                        {ProjectsItem.map((item, index) => (
                            <div
                                key={index}
                                className='card-project'
                                // onMouseDown={() =>
                                //     setisActive(isActive ? '' : `${index}`)
                                // }
                            >
                                <div
                                    style={
                                        item.thumbnail
                                            ? {
                                                  backgroundImage: `url(${item.thumbnail.url})`,
                                              }
                                            : {}
                                    }
                                    className='thumbnail'
                                ></div>
                                <div
                                    onMouseUp={() =>
                                        setisActive(isActive ? '' : `${index}`)
                                    }
                                    className={`details ${
                                        isActive === `${index}` ? 'focus' : ''
                                    }`}
                                >
                                    <div
                                        className={`arrow-up ${
                                            isActive ? 'active' : ''
                                        }`}
                                    >
                                        <ImArrowUp2
                                            size={24}
                                            className='arrow-up-icon'
                                        />
                                    </div>
                                    <h2 className='title'>{item.title}</h2>

                                    {/* description  */}
                                    {(item.description && (
                                        <Markdown className='description'>
                                            {item.description.markdown}
                                        </Markdown>
                                    )) || (
                                        <div className='description'>
                                            No Desc
                                        </div>
                                    )}
                                    <div className='see-more'>
                                        {item.git && (
                                            <Button
                                                classname='giticon'
                                                onClick={() => go(item.git)}
                                            >
                                                GitHub <FiGithub />
                                            </Button>
                                        )}

                                        <ButtonWithArrow
                                            classname='project'
                                            onClick={() =>
                                                go(
                                                    `/project/${item.projectSlug}`
                                                )
                                            }
                                        >
                                            See More
                                        </ButtonWithArrow>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardSlider>
                </div>
            </div>
        </div>
    )
}

Projects.defaultProps = defaultProps

export default Projects
