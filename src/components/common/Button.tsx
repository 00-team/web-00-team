import React, { ReactNode } from 'react'

// style
import './scss/button.scss'

interface ButtonProps {
    children?: ReactNode
}

const defaultProps: ButtonProps = {}

const Button = ({ children }: ButtonProps) => {
    return <button className='button'>{children}</button>
}

Button.defaultProps = defaultProps

export default Button
