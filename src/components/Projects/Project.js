import React, { useEffect } from 'react'

// router
import { useParams } from 'react-router-dom'

// redux 
import { useDispatch, useSelector } from 'react-redux'
import getProject from '../../redux/actions/data/getProject'

const Project = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const ProjectState = useSelector(s => s.project)

    useEffect(() => {
        dispatch(getProject(slug))
    }, [dispatch, slug])

    useEffect(() => {
        console.log(ProjectState)
    }, [ProjectState])

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
        </div>
    )
}

export default Project
