import React, { ReactNode, useState } from 'react'

// style
import './scss/button.scss'

interface ButtonProps {
    children?: ReactNode
    onClick?: (e: React.MouseEvent) => void
    classname?: String
}

const defaultProps: ButtonProps = {
    onClick: () => {},
}

const Button = ({ children, onClick, classname }: ButtonProps) => {
    return (
        <button
            className={`basic-button button ${classname}`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            {children}
        </button>
    )
}

export const LittleDream = ({ children, classname, onClick }: ButtonProps) => {
    const [Moved, setMoved] = useState(false)

    return (
        <div className='little-dream-container'>
            <span
                className={`dream right`}
                style={!Moved ? { top: '-20px', opacity: 1 } : {}}
                onMouseOver={() => setMoved(!Moved)}
            ></span>
            <span
                className={`dream left`}
                style={Moved ? { top: '-20px', opacity: 1 } : {}}
                onMouseOver={() => setMoved(!Moved)}
            ></span>

            <button
                className={`basic-button little-dream ${
                    classname ? classname : ''
                }`}
                onClick={e => (onClick ? onClick(e) : {})}
            >
                {children}
            </button>
        </div>
    )
}

Button.defaultProps = defaultProps

export default Button
