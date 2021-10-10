import React from 'react'

// style
import './scss/loading.scss'

interface LoadingProps {
    loading?: boolean
    total?: number
    loaded?: number
    fixed?: boolean
}

const defaultProps: LoadingProps = {
    loading: true,
    total: 1,
    loaded: 1,
    fixed: false,
}

const Loading = ({ loading, total, loaded, fixed }: LoadingProps) => {
    if (!loading) return <></>

    return (
        <div className={'loading' + (fixed ? ' fixed' : '')}>
            <span className='clock-loader'></span>
            <span>Loading ...</span>
            <span className='progress-bar'>
                <span
                    className='progress'
                    style={
                        typeof loaded === 'number' && typeof total === 'number'
                            ? {
                                  width: `${Math.floor(
                                      (loaded / total) * 100
                                  )}%`,
                              }
                            : { width: '100%' }
                    }
                ></span>
            </span>
        </div>
    )
}

Loading.defaultProps = defaultProps

export default Loading
