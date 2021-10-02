import React, { useEffect } from 'react'

// router
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import getProject from '../../redux/actions/loadProjects'
import { RootState } from '../../redux'

// elements
import Loading from '../common/Loading'

interface ProjectParams {
    slug: string
}

const Project = () => {
    const { slug } = useParams<ProjectParams>()
    const dispatch = useDispatch()
    const ProjectState = useSelector((state: RootState) => state.Projects)
    const Project = useSelector((state: RootState) =>
        state.Projects.projects.length > 0 ? state.Projects.projects[0] : null
    )

    useEffect(() => {
        dispatch(getProject({ first: 1, where: { projectSlug: slug } }))
    }, [dispatch, slug])

    if (ProjectState.loading) {
        return <Loading fixed={true} />
    }

    if (!Project) {
        if (ProjectState.error)
            return <span style={{ color: '#fff' }}>Error to get Project</span>
        return <span style={{ color: '#fff' }}>No Project to show</span>
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#FFF',
                padding: '50px',
            }}
        >
            Slug: {slug}
            <br />
            title: {Project.title}
            <br />
            thumbnail: {Project.thumbnail ? Project.thumbnail.url : 'None'}
            <br />
            description:{' '}
            {Project.description ? Project.description.markdown : 'None'}
            <br />
            startDate: {Project.startDate}
            <br />
            Slug: {Project.projectSlug}
            <br />
            projectUrl: {Project.projectUrl}
            <br />
            git: {Project.git}
            <br />
            demos:
            {Project.demos.map((i, ndx) => (
                <div key={ndx}>
                    <span>{i.url}</span>
                    <br />
                </div>
            ))}
            <br />
        </div>
    )
}

export default Project
