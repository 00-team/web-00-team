import React, { ReactNode, useState, useEffect } from 'react'

// style
import './sass/card.scss'

// icons
// MdNavigateNext
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'
import { MdNavigateBefore } from '@react-icons/all-files/md/MdNavigateBefore'

interface CardSliderProps {
    children?: ReactNode
}

const defaultProps: CardSliderProps = {}

const CardSlider = ({ children }: CardSliderProps) => {
    const [Elements, setElements] = useState<ReactNode[]>([])
    const [CardIndex, setCardIndex] = useState(0)

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
        let tmp_index = CardIndex + index

        if (tmp_index > Elements.length - 1) {
            tmp_index = 0
        }
        if (tmp_index < 0) {
            tmp_index = Elements.length - 1
        }

        setCardIndex(tmp_index)
    }

    const GetPos = (index: number): number => {
        const maxIndex = Elements.length - 1

        // current
        if (index === CardIndex) return 0

        // previous level 1
        if (CardIndex - 1 === index || (index === maxIndex && CardIndex === 0))
            return -1

        // next level 1
        if (CardIndex + 1 === index || (index === 0 && CardIndex === maxIndex))
            return 1

        if (Elements.length >= 7) {
            // previous level 2
            if (
                CardIndex - 2 === index ||
                (CardIndex === 0 && index === maxIndex - 1) ||
                (CardIndex === 1 && index === maxIndex)
            )
                return -2

            // next level 2
            if (
                CardIndex + 2 === index ||
                (CardIndex === maxIndex && index === 1) ||
                (CardIndex === maxIndex - 1 && index === 0)
            )
                return 2
        }

        return NaN
    }

    const GetClassByPos = (pos: number): string => {
        if (pos === 0) return ' c'
        else if (pos === 1) return ' n1'
        else if (pos === 2) return ' n2'
        else if (pos === -1) return ' p1'
        else if (pos === -2) return ' p2'
        else return ''
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

            <div className='card-slider'>
                {Elements.map((item, index) => (
                    <div
                        key={index}
                        className={'card ' + GetClassByPos(GetPos(index))}
                        onClick={() => {
                            let pos = GetPos(index)
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

CardSlider.defaultProps = defaultProps

export { CardSlider }
