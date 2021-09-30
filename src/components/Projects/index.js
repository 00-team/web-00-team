import React, { useEffect } from 'react'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../../redux/actions/data/loadProjects'

// elements
import Loading from '../elements/Loading'

const Projects = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector(state => state.projects)

    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    if (ProjectsState.loading) {
        return <Loading />
    }

    if (!ProjectsState.projects) return <></>

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#FFF',
                padding: '50px',
            }}
        >
            Projects
            {ProjectsState.projects.map((item, index) => (
                <span key={index}>
                    title: {item.title}<br />
                    thumbnail: {item.thumbnail.url}<br />
                    startDate: {item.startDate}<br />
                    Slug: {item.projectSlug}<br />
                    projectUrl: {item.projectUrl}<br />
                    git: {item.git}<br />
                    demos:
                    {item.demos.map((i, ndx) => (
                        <div key={ndx}>
                            <span>{i.url}</span>
                            <br />
                        </div>
                    ))}
                    <br />
                </span>
            ))}
        </div>
    )
}

export default Projects
