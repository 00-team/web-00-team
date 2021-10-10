import React, { ReactNode } from 'react'

// style
import './scss/button.scss'

interface ButtonProps {
    children?: ReactNode
    onClick?: (e: React.MouseEvent) => void
}

const defaultProps: ButtonProps = {
    onClick: () => {},
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button className='button' onClick={e => (onClick ? onClick(e) : {})}>
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button
