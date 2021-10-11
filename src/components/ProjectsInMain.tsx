import React, { useEffect, useState } from 'react'

import Loadable from 'react-loadable'

import Markdown from 'markdown-to-jsx'

// lazy motion
const LazyMotion = Loadable({
    loader: () => import('./common/LazyMotion'),
    loading: () => <span>loading lazymotion</span>,
})

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../redux/actions/loadProjects'
import { RootState } from '../redux'
import { ProjectModel } from 'src/redux/models/Projects'

// commons
import Loading from './common/Loading'
import Button from './common/Button'

// slider
import { CardSlider } from './common/slider'

// import style
import './sass/projects.scss'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { ImArrowUp2 } from '@react-icons/all-files/im/ImArrowUp2'

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
                                onClick={() =>
                                    setisActive(isActive ? '' : `${index}`)
                                }
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
                                    {/* ////////////// */}
                                    {/* <div className='date-git'>
                                        {item.startDate && (
                                            <span
                                                className='date'
                                                title={
                                                    'Start at ' + item.startDate
                                                }
                                            >
                                                {item.startDate}
                                            </span>
                                        )}

                                        {item.git && (
                                            <span
                                                className='git'
                                                title={`Project Github`}
                                                onClick={() => go(item.git)}
                                            >
                                                GitHub <FiGithub />
                                            </span>
                                        )}
                                    </div> */}
                                    <div className='see-more'>
                                        <div className='github'>
                                            {item.git && (
                                                <Button
                                                    classname='giticon'
                                                    onClick={() => go(item.git)}
                                                >
                                                    GitHub <FiGithub />
                                                </Button>
                                            )}
                                        </div>

                                        <Button
                                            classname='project'
                                            onClick={() =>
                                                go(
                                                    `/project/${item.projectSlug}`
                                                )
                                            }
                                        >
                                            See More
                                        </Button>
                                    </div>

                                    {/* {item.projectSlug} */}
                                    {/* {item.startDate} */}
                                    {/* {item.git} */}
                                    {/* {item.projectUrl} */}
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
