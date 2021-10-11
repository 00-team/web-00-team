import React, { ReactNode } from 'react'

// style
import './scss/button.scss'

interface ButtonProps {
    children?: ReactNode
    onClick?: (e: React.MouseEvent) => void
    classname? : String
}

const defaultProps: ButtonProps = {
    onClick: () => {},
}

const Button = ({ children, onClick,classname }: ButtonProps) => {
    return (
        <button
            className={`button ${classname}`}
            onClick={e => (onClick ? onClick(e) : {})}
        >
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button
