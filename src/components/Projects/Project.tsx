import React, { FC, useEffect, useState } from 'react'

import Head from '../common/Head'

// video player
import MasterVideo, { Options } from 'master-video'

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

interface CurrentDemo {
    type: 'img' | 'video'
    src: string
}

const MasterVideoOptions: Options = {
    masterClass: 'demo-video',
}

const Project: FC = () => {
    const { slug } = useParams<ProjectParams>()
    const dispatch = useDispatch()
    const ProjectState = useSelector((state: RootState) => state.Projects)
    const Project = useSelector((state: RootState) =>
        state.Projects.projects.length > 0 ? state.Projects.projects[0] : null
    )
    const [currentDemo, setCurrentDemo] = useState<CurrentDemo | null>(null)
    useEffect(() => {
        if (Project) setCurrentDemo({ src: Project.thumbnail.url, type: 'img' })
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

    const go_fullscreen = (selector: string) => {
        const element = document.querySelector(selector)

        if (!element || !document.fullscreenEnabled) return

        if (document.fullscreenElement === element) {
            document.exitFullscreen()
        } else {
            element.requestFullscreen()
        }
    }

    return (
        <section className='project-container'>
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

            <div className='demos-container'>
                <div className='main'>
                    {currentDemo &&
                        (currentDemo.type === 'img' ? (
                            <div
                                className='demo-img'
                                onClick={() => go_fullscreen('div.demo-img')}
                                style={{
                                    backgroundImage: `url(${currentDemo.src})`,
                                }}
                            ></div>
                        ) : (
                            <MasterVideo
                                source={currentDemo.src}
                                options={MasterVideoOptions}
                            />
                        ))}
                </div>

                {Project.demos.length > 0 && (
                    <div className='demo-previews'>
                        {Project.demos.map((demo, index) => {
                            if (IMAGE_MIMETYPE.includes(demo.mimeType))
                                return (
                                    <div
                                        key={index}
                                        className='demo-thumbnail'
                                        style={{
                                            backgroundImage: `url(${demo.url})`,
                                        }}
                                        onClick={() =>
                                            setCurrentDemo({
                                                src: demo.url,
                                                type: 'img',
                                            })
                                        }
                                    ></div>
                                )
                            else
                                return (
                                    <video
                                        src={demo.url}
                                        className='demo-thumbnail'
                                        key={index}
                                        onClick={() =>
                                            setCurrentDemo({
                                                src: demo.url,
                                                type: 'video',
                                            })
                                        }
                                    ></video>
                                )
                        })}
                    </div>
                )}
            </div>
            <div className='details'>
                <h1 className='u-hide-visually'>{Project.title}</h1>
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
        </section>
    )
}

export default Project
