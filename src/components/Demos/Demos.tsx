import React, { FC } from 'react'

interface DemosProps {
    LoadingRender?: boolean
}

const defaultProps: DemosProps = {}

const Demos: FC<DemosProps> = ({ LoadingRender }) => {
    console.log(LoadingRender)
    return <div></div>
}

Demos.defaultProps = defaultProps

export default Demos
