import React, { FC, useState } from 'react'

import { GetTouchPosY, GetTouchPosX } from '../utils'

interface ToucherProps extends React.HTMLAttributes<HTMLDivElement> {
    onToucher: (movement: number) => void
    ToucherDir: 'X' | 'Y'
}

const defaultProps: ToucherProps = {
    onToucher: () => {},
    ToucherDir: 'X',
}

interface TouchStateType {
    isDragging: boolean
    startPos: number
    currentPos: number
}

const DTS: TouchStateType = {
    isDragging: false,
    startPos: 0,
    currentPos: 0,
}

const Toucher: FC<ToucherProps> = ({
    children,
    onToucher,
    ToucherDir,
    ...props
}) => {
    const [TouchState, setTouchState] = useState<TouchStateType>(DTS)

    const DragEnd = () => {
        if (!TouchState.isDragging) return

        const movement = TouchState.startPos - TouchState.currentPos
        onToucher(movement)

        setTouchState(DTS)
    }
    return (
        <div
            {...props}
            onContextMenu={e => e.preventDefault()}
            // mouse
            onMouseDown={e =>
                setTouchState({
                    isDragging: true,
                    startPos: ToucherDir === 'X' ? e.pageX : e.pageY,
                    currentPos: ToucherDir === 'X' ? e.pageX : e.pageY,
                })
            }
            onMouseMove={e =>
                TouchState.isDragging &&
                setTouchState({
                    ...TouchState,
                    currentPos: ToucherDir === 'X' ? e.pageX : e.pageY,
                })
            }
            onMouseLeave={() => setTouchState(DTS)}
            onMouseUp={() => DragEnd()}
            // touch
            onTouchStart={e => {
                const pos =
                    ToucherDir === 'X' ? GetTouchPosX(e) : GetTouchPosY(e)
                setTouchState({
                    isDragging: true,
                    startPos: pos,
                    currentPos: pos,
                })
            }}
            onTouchMove={e => {
                if (!TouchState.isDragging) return
                const pos =
                    ToucherDir === 'X' ? GetTouchPosX(e) : GetTouchPosY(e)
                setTouchState({ ...TouchState, currentPos: pos })
            }}
            onTouchEnd={() => DragEnd()}
        >
            {children}
        </div>
    )
}

Toucher.defaultProps = defaultProps

export default Toucher
