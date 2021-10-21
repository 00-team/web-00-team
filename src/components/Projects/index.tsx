import React, { useEffect } from 'react'

// helmet
import { Helmet } from 'react-helmet'

// router
import { Link } from 'react-router-dom'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'

// elements
import Loading from '../common/Loading'

const Projects = () => {
    const dispatch = useDispatch()
    const ProjectsState = useSelector((state: RootState) => state.Projects)

    useEffect(() => {
        dispatch(GetProject())
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
            <Helmet>
                <title>00 Team Projects</title>
                <meta property='og:title' content='00 Team Projects' />
            </Helmet>
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
                    <Link to={`/project/${item.projectSlug}`}> Slug </Link>
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
