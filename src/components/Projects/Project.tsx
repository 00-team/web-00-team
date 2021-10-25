import React, { FC, useEffect, useState } from 'react'

import Head from '../common/Head'

// router
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'
import { IMAGE_MIMETYPE } from '../../redux/models/Projects'

// elements
import Loading from '../common/Loading'
import { ButtonWithArrow } from '../common/Button'

// utils
// import { go } from "../utils/Base"

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
// import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'

// styling
import './sass/project.scss'
import Markdown from 'markdown-to-jsx'

interface ProjectParams {
    slug: string
}

const Project: FC = () => {
    const { slug } = useParams<ProjectParams>()
    const dispatch = useDispatch()
    const ProjectState = useSelector((state: RootState) => state.Projects)
    const Project = useSelector((state: RootState) =>
        state.Projects.projects.length > 0 ? state.Projects.projects[0] : null
    )
    const [currentDemo, setCurrentDemo] = useState('')

    useEffect(() => {
        if (Project) setCurrentDemo(Project.thumbnail.url)
    }, [setCurrentDemo, Project])

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
        <div className='project-container'>
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

            <div className='demos'>
                <div
                    className='main'
                    style={{ backgroundImage: `url(${currentDemo})` }}
                ></div>
                {Project.demos.length > 0 && (
                    <div className='demo-previews'>
                        {Project.demos.map((demo, index) => {
                            if (IMAGE_MIMETYPE.includes(demo.mimeType))
                                return (
                                    <div
                                        key={index}
                                        className='img'
                                        style={{
                                            backgroundImage: `url(${demo.url})`,
                                        }}
                                        onClick={() => setCurrentDemo(demo.url)}
                                    ></div>
                                )
                            else
                                return (
                                    <video
                                        src={demo.url}
                                        className='img'
                                        key={index}
                                    ></video>
                                )
                        })}
                    </div>
                )}
            </div>
            <div className='details'>
                <section className='project-title'>
                    <h2 className='title'>
                        <span>Title</span>
                    </h2>
                    <div className='detail-content'>
                        <span>{Project.title}</span>
                    </div>
                </section>

                <section className='description'>
                    <h2 className='title'>
                        <span>Description</span>
                    </h2>
                    <div className='detail-content'>
                        {Project.description && (
                            <Markdown children={Project.description.markdown} />
                        )}
                    </div>
                </section>
                {Project.projectTags.length > 0 && (
                    <section className='tags'>
                        <h2 className='title'>
                            <span>Category</span>
                        </h2>
                        <div className='detail-content'>
                            <ul className='tags'>
                                {Project.projectTags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
                <section className='start-date'>
                    <h2 className='title'>
                        <span>Start Date</span>
                    </h2>
                    <div className='detail-content'>
                        <span>{Project.startDate}</span>
                    </div>
                </section>
                <section className='status'>
                    <h2 className='title'>
                        <span>Status</span>
                    </h2>
                    <div className='detail-content'>
                        <span>{Project.projectStatus}</span>
                    </div>
                </section>
                <section className='version'>
                    <h2 className='title'>
                        <span>Version</span>
                    </h2>
                    <div className='detail-content'>
                        <span>{Project.version}</span>
                    </div>
                </section>
                <section className='links'>
                    <h2 className='title'>
                        <span>Links</span>
                    </h2>
                    <div className='detail-content'>
                        {Project.git && <a href={Project.git + '2'}>Github</a>}
                        {Project.projectUrl && (
                            <a href={Project.projectUrl + '1'}>Project url</a>
                        )}
                    </div>
                    <div className='detail-content github'>
                        <ButtonWithArrow
                            onClick={() =>
                                window.open(
                                    `${Project.projectUrl || Project.git}`
                                )
                            }
                        >
                            GitHub <FiGithub />
                        </ButtonWithArrow>
                    </div>
                </section>
            </div>

            {/* <div className='project-container'>
                <div className='project-gallery'>
                    <div className='project-img-preview'>
                        <div className="project-img" ></div>
                    </div>
                    <div className='space'></div>
                    <div className='project-imgs'>
                        {[1,2,3,4,5,6].map((index) =>{
                            return (
                                <div
                                    key={index}
                                    className='img'
                                    style={{
                                        backgroundImage: `url(${Project.thumbnail.url})`,
                                    }}
                                ></div>
                            )
                        })}
                    </div>
                </div>





                <div className='space'></div>
                <div className='project-details'>
                    <div className='details-container'>
                        <div className='project title'>
                            <div className='title-line'>
                                <span className='title-header'>
                                    Project Title
                                </span>
                            </div>
                            <div className='title-project'>{Project.title}</div>
                        </div>
                        <div className='project description'>
                            <div className='title-line'>
                                <span className='title-header'>
                                    Project Description
                                </span>
                            </div>
                            <div className='description-head'>
                                {Project.description
                                    ? Project.description.markdown
                                    : 'None'}
                            </div>
                        </div>
                        <div className='project tag'>
                            <div className='title-line'>
                                <span className='tag-header'>
                                    Project Category
                                </span>
                            </div>
                            <div className='tag-head'>{Project.projectTags}</div>
                        </div>
                        <div className='project start-time'>
                            <div className='title-line'>
                                <span className='start-time-header'>
                                    Project Start Time
                                </span>
                            </div>
                            <div className='start-time-head'>
                                {Project.startDate}
                            </div>
                        </div>
                        <div className='project project-status'>
                            <div className='title-line'>
                                <span className='project-status-header'>
                                    Project Status
                                </span>
                            </div>
                            <div className='project-status-head'>{Project.projectStatus ? Project.projectStatus : "Not Set"}</div>
                        </div>
                        <div className='project github'>
                            <ButtonWithArrow>
                                GitHub <FiGithub />
                            </ButtonWithArrow>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Project
