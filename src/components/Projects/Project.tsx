import React, { useEffect } from 'react'

import Head from '../common/Head'

// router
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'

// elements
import Loading from '../common/Loading'

// // icons
// import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
// import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'

// styling
import './sass/project.scss'

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
        dispatch(GetProject({ first: 1, where: `{ projectSlug: "${slug}" }` }))
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
        <div className='project'>
            <Head
                title={Project.title}
                description='Project of 00 Team'
                url={`https://web-00-team.web.app/project/${Project.projectSlug}`}
                keywords={`00 Team Project,${Project.title}`}
                image={
                    Project.thumbnail
                        ? {
                              url: `https://media.graphcms.com/resize=fit:crop,height:540,width:960/${Project.thumbnail.handle}`,
                              alt: `${Project.title} thumbnail`,
                              width: '960',
                              height: '540',
                          }
                        : undefined
                }
                twitter_card='summary_large_image'
            />

            <div className='project-container'>
                <div className='project-gallery'>
                    <div className='project-img-preview'></div>
                    <div className='space'></div>
                    <div className='project-imgs'>
                        <div className='img'></div>
                        <div className='img'></div>
                        <div className='img'></div>
                        <div className='img'></div>
                        <div className='img'></div>
                        <div className='img'></div>
                    </div>
                </div>
                <div className='space'></div>
                <div className='project-details'>
                    <div className='details-container'>
                        <div className='title'>title</div>
                        <div className='description'>description</div>
                        <div className='tag'>tag</div>
                        <div className='start-time'>start-time</div>
                        <div className='project-status'>project-status</div>
                        <div className='github'>
                            <button>github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
