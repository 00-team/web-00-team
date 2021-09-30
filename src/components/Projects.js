import React, { useEffect } from 'react'

// lazy motion
import LazyMotion from './elements/LazyMotion'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../redux/actions/data/loadProjects'
import ProjectsSlider from './elements/ProjectsSlider'

// import css
import './sass/projects.scss'

function Projects() {
    const dispatch = useDispatch()
    const ProjectsState = useSelector(state => state.projects)

    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    if (ProjectsState.error) {
        return <span>Error Acquired</span>
    }

    if (ProjectsState.loading) {
        return <span>Loading ... </span>
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
                {/* {ProjectsState.projects.map((item,index) =>{
                        return(
                            <div key={index} className="project">
                                <div className="title">{item.title}</div>
                                <div className="descript"> {item.descript} </div>
                                <div className="preview"><img src={item.picture.url} /> </div>
                            </div>
                        )
                    })} */}
            </div>
        </div>
    )
}

export default Projects
