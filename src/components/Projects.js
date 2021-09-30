import React, { useEffect, useRef } from 'react'

// lazy motion 
import LazyMotion from './elements/LazyMotion'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../redux/actions/data/loadProjects'
import ProjectsSlider from './elements/ProjectsSlider'

// types 
import { SCROLLTOP_PROJECTS } from '../redux/reducers/data/types'

// import css
import './sass/projects.scss'

function Projects() {
    const ProjectsState = useSelector(state => state.projects)
    const dispatch = useDispatch()

    const title = useRef()

    const getScrollTop = () => {
        const scrollTop = title.current.scrollTop
        const offSet = title.current.offsetTop
        const result = offSet - scrollTop

        dispatch({ type: SCROLLTOP_PROJECTS, payload: result })
    }

    useEffect(() => {
        getScrollTop()
    }, [])

    if (ProjectsState.error){
        return <span>Error Acquired</span>
    }

    if (ProjectsState.loading){
        return <span>Loading ... </span>
    }
        return (
            <div className='projects' id='projects'>
                <div className='container' ref={title}>
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
