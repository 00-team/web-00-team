import React, { ReactNode, useState, useEffect } from 'react'

// style
import './sass/card.scss'

// functions
import { GetClassByPos, GetTouchPos, GetCardPos } from './Card.functions'

// icons
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'
import { MdNavigateBefore } from '@react-icons/all-files/md/MdNavigateBefore'

// types
interface CardSliderProps {
    children?: ReactNode
    onChange?: (direction: -2 | -1 | 1 | 2) => void
}

interface TouchStateType {
    isDragging: boolean
    startPos: number
    currentPos: number
}

// default valuse
const DTS: TouchStateType = {
    isDragging: false,
    startPos: 0,
    currentPos: 0,
}

// main component
const CardSlider = ({ children, onChange }: CardSliderProps) => {
    const [Elements, setElements] = useState<ReactNode[]>([])
    const [CardIndex, setCardIndex] = useState(0)
    const [TouchState, setTouchState] = useState<TouchStateType>(DTS)

    useEffect(() => {
        if (!children) return
        if (Array.isArray(children)) {
            if (children.length < 3)
                return setElements([...children, ...children])
            return setElements(children)
        } else {
            return setElements([children])
        }
    }, [children])

    const ChangeCardIndex = (index: number): void => {
        if (index === -2 || index === -1 || index === 1 || index === 2) {
            if (onChange) onChange(index)
        }

        let tmp_index = CardIndex + index

        if (tmp_index > Elements.length - 1) {
            tmp_index = 0
        }
        if (tmp_index < 0) {
            tmp_index = Elements.length - 1
        }

        setCardIndex(tmp_index)
    }

    const DragEnd = () => {
        if (!TouchState.isDragging) return

        const movement = TouchState.startPos - TouchState.currentPos
        if (movement > 100) {
            ChangeCardIndex(1)
        } else if (movement < -100) {
            ChangeCardIndex(-1)
        }

        setTouchState(DTS)
    }

    if (Elements.length < 1) return <></>

    return (
        <div
            className='card-slider-container'
            style={Elements.length === 1 ? { justifyContent: 'center' } : {}}
        >
            {Elements.length > 1 && (
                <div className='btn previous'>
                    <button onClick={() => ChangeCardIndex(-1)}>
                        <div className='icon'>
                            <MdNavigateBefore />
                        </div>
                    </button>
                </div>
            )}

            <div
                className='card-slider'
                onContextMenu={e => e.preventDefault()}
                // mouse
                onMouseDown={e =>
                    setTouchState({
                        isDragging: true,
                        startPos: e.pageX,
                        currentPos: e.pageX,
                    })
                }
                onMouseMove={e =>
                    TouchState.isDragging &&
                    setTouchState({ ...TouchState, currentPos: e.pageX })
                }
                onMouseLeave={() => setTouchState(DTS)}
                onMouseUp={() => DragEnd()}
                // touch
                onTouchStart={e => {
                    const pos = GetTouchPos(e)
                    setTouchState({
                        isDragging: true,
                        startPos: pos,
                        currentPos: pos,
                    })
                }}
                onTouchMove={e => {
                    if (!TouchState.isDragging) return
                    const pos = GetTouchPos(e)
                    setTouchState({ ...TouchState, currentPos: pos })
                }}
                onTouchEnd={() => DragEnd()}
            >
                {Elements.map((item, index) => (
                    <div
                        key={index}
                        className={
                            'card ' +
                            GetClassByPos(
                                GetCardPos(index, CardIndex, Elements.length)
                            )
                        }
                        onMouseUp={() => {
                            let pos = GetCardPos(
                                index,
                                CardIndex,
                                Elements.length
                            )
                            if (pos) ChangeCardIndex(pos)
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {Elements.length > 1 && (
                <div className='btn next'>
                    <button onClick={() => ChangeCardIndex(1)}>
                        <div className='icon'>
                            <MdNavigateNext />
                        </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export { CardSlider }
