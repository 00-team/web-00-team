import React, { useEffect } from 'react'

// router
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import getProject from '../../redux/actions/data/getProject'

// elements
import Loading from '../elements/Loading'

const Project = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const ProjectState = useSelector(s => s.project)
    const state = useSelector(s => s.project.project)

    useEffect(() => {
        dispatch(getProject(slug))
    }, [dispatch, slug])

    if (ProjectState.loading) {
        return <Loading fixed={true} />
    }

    if (!state) {
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
            Slug: {slug}<br />
            title: {state.title}<br />
            thumbnail: {state.thumbnail ? state.thumbnail.url : 'None'}<br />
            description: {state.description ? state.description.markdown : 'None'}<br />
            startDate: {state.startDate}<br />
            Slug: {state.projectSlug}<br />
            projectUrl: {state.projectUrl}<br />
            git: {state.git}<br />
            demos:
            {state.demos.map((i, ndx) => (
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
