import React, { useEffect } from 'react'

// router
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions/'
import { RootState } from '../../redux'

// elements
import Loading from '../common/Loading'

// icons
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'

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
        // <div className='project'>
        //     <h1 className='title'> {Project.title} </h1>
        //     <br />
        //     <div className='prev'>
        //         {Project.thumbnail ? Project.thumbnail.url : 'None'}
        //     </div>

        //     <br />
        //     description:{' '}
        //     {Project.description ? Project.description.markdown : 'None'}
        //     <br />
        //     startDate: {Project.startDate}
        //     <br />
        //     projectUrl: {Project.projectUrl}
        //     <br />
        //     git: {Project.git}
        //     <br />
        //     demos:
        //     {Project.demos.map((i, ndx) => (
        //         <div key={ndx}>
        //             <span>{i.url}</span>
        //             <br />
        //         </div>
        //     ))}
        //     <br />
        // </div>
        <div className='project'>
            <div className='card-container'>
                <div className='card'>
                    <div className='side left'>
                        <div
                            className='img'
                            style={{
                                backgroundImage: `url(${
                                    Project.thumbnail
                                        ? Project.thumbnail.url
                                        : 'None'
                                })`,
                            }}
                        ></div>
                    </div>
                    <div className='side right'>
                        <h2 className='title'>{Project.title}</h2>
                        <div className='description'>
                            {Project.description
                                ? Project.description.markdown
                                : 'None'}
                        </div>
                        <div className='data'>
                            <div className='start-date'>
                                <AiOutlineClockCircle />
                                <div className='start-date-url'>
                                    {Project.startDate}
                                </div>
                            </div>
                            <div className='github'>
                                <FiGithub />
                                <div className='github-url'>{Project.git}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='notify'>Click Me</div>
            </div>
        </div>
    )
}

export default Project
