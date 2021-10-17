import React, { FC } from 'react'

// markdowm
// import Markdown from 'markdown-to-jsx'

// reudx
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// import scss
import './sass/about.scss'

const About: FC = () => {
    const BaseState = useSelector((state: RootState) => state.Base.base)

    if (!BaseState || !BaseState.about) return <></>

    return <div style={{ color: 'red' }}>{BaseState.about.markdown}</div>
}

export default About
