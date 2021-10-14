import React, { FC, useEffect, useState } from 'react'

import Loadable from '@loadable/component'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import loadProjects from '../../redux/actions/loadProjects'
import { RootState } from '../../redux'
// import { ProjectModel } from 'src/redux/models/Projects'

// commons
import Loading from '../common/Loading'

const LazyMotion = Loadable(() => import('../common/LazyMotion'))
const CardSlider = Loadable(() => import('../common/slider/CardSlider'))

// import style
import './demos.scss'
import DemoCard from './DemoCard'

interface DemosProps {
    LoadingRender?: boolean
}

const defaultProps: DemosProps = {
    LoadingRender: true,
}

export const Demos: FC<DemosProps> = ({ LoadingRender }) => {
    const dispatch = useDispatch()
    const Projects = useSelector((state: RootState) => state.Projects)
    const DemosData = useSelector((state: RootState) => state.Projects.projects)

    const [showDetail, setshowDetail] = useState('')

    useEffect(() => {
        dispatch(loadProjects())
    }, [dispatch])

    if (Projects.error) {
        return <span>Error Acquired {Projects.error}</span>
    }

    if (Projects.loading && LoadingRender) {
        return <Loading />
    }

    if (DemosData.length === 0) return <></>

    return (
        <div className='demos'>
            <div className='container'>
                <LazyMotion>
                    <div className='header'>
                        <h1>Demos</h1>
                    </div>
                </LazyMotion>
                <div className='demo-slider'>
                    <CardSlider onChange={() => setshowDetail('')}>
                        {DemosData.map((item, index) => (
                            <DemoCard
                                key={index}
                                demo={item}
                                showDetail={showDetail}
                                setshowDetail={setshowDetail}
                                index={index}
                            />
                        ))}
                    </CardSlider>
                </div>
            </div>
        </div>
    )
}

Demos.defaultProps = defaultProps

export default Demos
