import React from 'react'

// style
import './scss/loading.scss'

const Loading = ({ loading, total, loaded, fixed }) => {
    if (!loading) return <></>

    return (
        <div className={'loading' + (fixed ? ' fixed' : '')}>
            <span>Loading ...</span>
            <span className='progress-bar'>
                <span
                    className='progress'
                    style={{
                        width: `${Math.floor((loaded / total) * 100)}%`,
                    }}
                ></span>
            </span>
        </div>
    )
}

Loading.defaultProps = {
    loading: true,
    total: 1,
    loaded: 0,
}

export default Loading
