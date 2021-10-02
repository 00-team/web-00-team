import React, { useEffect } from 'react'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../../redux/actions/loadProjects'
import { RootState } from '../../redux'

// elements
import Loading from '../common/Loading'

const Projects = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)

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
                <span key={index} style={{ borderBottom: '10px solid red' }}>
                    title: {item.title}
                    <br />
                    thumbnail: {item.thumbnail ? item.thumbnail.url : 'None'}
                    <br />
                    description:{' '}
                    {item.description ? item.description.markdown : 'None'}
                    <br />
                    startDate: {item.startDate}
                    <br />
                    Slug: {item.projectSlug}
                    <br />
                    projectUrl: {item.projectUrl}
                    <br />
                    git: {item.git}
                    <br />
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
