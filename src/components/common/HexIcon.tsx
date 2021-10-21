import React, { FC, SVGProps } from 'react'

const HexIcon: FC<SVGProps<SVGSVGElement>> = ({ className, ...attr }) => {
    return (
        <svg
            {...attr}
            viewBox='0 0 5.2 6'
            xmlns='http://www.w3.org/2000/svg'
            className={`hex-icon ${className ? className : ''}`}
        >
            <path d='M 2.6 0 L 5.2 1.5 L 5.2 4.5 L 2.6 6 L 0 4.5 L 0 1.5 Z' />
        </svg>
    )
}

export default HexIcon
