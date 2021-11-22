import React, { FC, useEffect, useState } from 'react'

import Loadable from '@loadable/component'

// redux stuff
import { useDispatch, useSelector } from 'react-redux'
import { GetProject } from '../../redux/actions'
import { RootState } from '../../redux'
// import { ProjectModel } from 'src/redux/models/Projects'

// commons
import Loading from '../common/Loading'

// lazy motion
const LazyMotion = Loadable(() => import('../common/LazyMotion'))

const CardSlider = Loadable(() => import('../common/slider/CardSlider'))

// btn
import { ButtonWithArrow } from '../common/Button'

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

    const [showDetail, setshowDetail] = useState('1')

    useEffect(() => {
        dispatch(GetProject())
    }, [dispatch])

    if (Projects.error) {
        return <span>Error Acquired {Projects.error}</span>
    }

    if (Projects.loading && LoadingRender) {
        return <Loading />
    }

    if (DemosData.length === 0) return <></>

    return (
        <section className='demos'>
            <div className='container'>
                <LazyMotion>
                    {/* <div className='header'> */}
                    <h2 className='main-title'>Demos</h2>
                    {/* </div> */}
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
                <div
                    className='project'
                    onClick={() => window.open('/projects', '_self')}
                >
                    <ButtonWithArrow>See All Projects</ButtonWithArrow>
                </div>
            </div>
        </section>
    )
}

Demos.defaultProps = defaultProps

export default Demos
