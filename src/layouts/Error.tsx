import React, { FC } from 'react'

import './sass/error.scss'

interface ErrorProps {
    code: string
}

const defaultProps: ErrorProps = { code: '404' }

const Error: FC<ErrorProps> = ({ code }) => {
    return (
        <div className='error-container'>
            <div title={code} className='error'>
                {code}
            </div>
        </div>
    )
}

Error.defaultProps = defaultProps

export default Error
