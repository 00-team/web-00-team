import React, { FC, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/'

import './sass/main-bg.scss'

const MainBg: FC = () => {
    const BG_SIZE = 1000
    const BG_ASPEED = 6 // 1. (25 * 6)ms, 2. (50 * 6)ms ...

    const [BgSvgs, setBgSvgs] = useState<JSX.Element[]>([])
    const WINWID = useSelector((state: RootState) => state.App.winwid)

    useEffect(() => {
        let Squares: JSX.Element[] = []
        for (let size = BG_SIZE, pos = 0; size > 0; size -= 25, pos += 12.5) {
            Squares.push(
                <rect
                    className='bg-square'
                    key={size}
                    x={pos}
                    y={pos}
                    width={size}
                    height={size}
                    // A2
                    style={{
                        animationDelay: `${size * BG_ASPEED}ms`,
                        animationDuration: `${BG_ASPEED * BG_SIZE * 2}ms`,
                    }}

                    // A1
                    // style={{
                    //     animationDelay: `${size * BG_ASPEED}ms`,
                    //     animationDuration: `${BG_ASPEED * BG_SIZE}ms`,
                    // }}
                />
            )
        }
        setBgSvgs([...Squares])
    }, [setBgSvgs])

    return (
        <div className='main-bg'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={`0 0 ${BG_SIZE} ${BG_SIZE}`}
                style={
                    WINWID > window.innerHeight
                        ? { width: '100%' }
                        : { height: '100%' }
                }
            >
                <rect fill='#040404' width={BG_SIZE} height={BG_SIZE} />

                <g
                    fill='none'
                    stroke='#272727'
                    strokeWidth='1'
                    strokeMiterlimit='10'
                    strokeOpacity='0'
                >
                    {BgSvgs.map(item => item)}
                </g>
            </svg>
        </div>
    )
}

export default MainBg
