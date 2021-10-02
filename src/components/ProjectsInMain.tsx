import React, { useEffect } from 'react'

// lazy motion
import LazyMotion from './common/LazyMotion'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../redux/actions/loadProjects'
import { RootState } from '../redux'

// elements
import Loading from './common/Loading'
// import ProjectsSlider from './elements/ProjectsSlider'

// import css
import './sass/projects.scss'

interface ProjectsProps {
    loadingRender: boolean
}

const defaultProps: ProjectsProps = {
    loadingRender: true,
}

function Projects({ loadingRender }: ProjectsProps) {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)

    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    if (ProjectsState.error) {
        return <span>Error Acquired {ProjectsState.error}</span>
    }

    if (ProjectsState.loading && loadingRender) {
        return <Loading />
    }

    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <LazyMotion>
                    <div className='header'>
                        <h1>Projects</h1>
                    </div>
                </LazyMotion>
                {/* <ProjectsSlider images={ProjectsState} /> */}
            </div>
        </div>
    )
}

Projects.defaultProps = defaultProps

export default Projects
