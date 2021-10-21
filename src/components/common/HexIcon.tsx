import React, { FC, SVGProps } from 'react'

export const HexIcon: FC<SVGProps<SVGSVGElement>> = ({
    children,
    className,
    ...attr
}) => {
    return (
        <svg
            {...attr}
            viewBox='0 0 5.2 6'
            xmlns='http://www.w3.org/2000/svg'
            className={`hex-icon ${className ? className : ''}`}
        >
            <path d='M 2.6 0 L 5.2 1.5 L 5.2 4.5 L 2.6 6 L 0 4.5 L 0 1.5 Z' />
            {children}
        </svg>
    )
}

export const HexCloseIcon: FC<SVGProps<SVGSVGElement>> = ({
    className,
    ...attr
}) => {
    return (
        <svg
            {...attr}
            viewBox='0 0 24 28'
            xmlns='http://www.w3.org/2000/svg'
            className={`hex-icon ${className ? className : ''}`}
        >
            <path d='M 12 0 L 24 7 L 24 21 L 12 28 L 0 21 L 0 7 Z' />
            <path
                style={{ fill: '#fff' }}
                d='M 17.5832 11.6832 a 0.4 0.4 90 0 0 0 -0.5664 l -3.2 -3.2 a 0.4 0.4 90 0 0 -0.5664 0.5664 L 16.3344 11 H 8.5 A 2 2 90 0 0 6.5 13 v 6.4 a 0.4 0.4 90 0 0 0.8 0 v -6.4 A 1.2 1.2 90 0 1 8.5 11.8 h 7.8344 l -2.5176 2.5168 a 0.4 0.4 90 0 0 0.5664 0.5664 l 3.2 -3.2 z'
            ></path>
        </svg>
    )
}

export default HexIcon
