import React, { FC, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/'

import './sass/main-bg.scss'

const MainBg: FC = () => {
    const BG_SIZE = 1000
    const BG_ASPEED = 30 // 1. (25 * BG_ASPEED)ms, 2. (50 * BG_ASPEED)ms ...
    // 6 for Squares is good and 30 for Hexs

    const [BgSvgs, setBgSvgs] = useState<JSX.Element[]>([])
    const WINWID = useSelector((state: RootState) => state.App.winwid)

    useEffect(() => {
        /* --------------Squares--------------- */
        // let Squares: JSX.Element[] = []
        // for (let size = BG_SIZE, pos = 0; size > 0; size -= 25, pos += 12.5) {
        //     Squares.push(
        //         <rect
        //             className='bg-square'
        //             key={size}
        //             x={pos}
        //             y={pos}
        //             width={size}
        //             height={size}
        //             // A2
        //             style={{
        //                 animationDelay: `${size * BG_ASPEED}ms`,
        //                 animationDuration: `${BG_ASPEED * BG_SIZE * 2}ms`,
        //             }}

        //             // A1
        //             // style={{
        //             //     animationDelay: `${size * BG_ASPEED}ms`,
        //             //     animationDuration: `${BG_ASPEED * BG_SIZE}ms`,
        //             // }}
        //         />
        //     )
        // }
        // setBgSvgs([...Squares])

        /* --------------Hexs--------------- */
        let Hexs = []

        for (let size = BG_SIZE / 10; size >= 1; size -= 2) {
            Hexs.push(
                <path
                    d={`
                    M ${0.0 * size} ${-6.6 * size} 
                    L ${5.7 * size} ${-3.3 * size} 
                    L ${5.7 * size} ${3.3 * size} 
                    L ${0.0 * size} ${6.6 * size} 
                    L ${-5.7 * size} ${3.3 * size} 
                    L ${-5.7 * size} ${-3.3 * size} 
                    Z
                `}
                    key={size}
                    style={{
                        animationDelay: `${size * BG_ASPEED}ms`,
                        animationDuration: `${BG_ASPEED * (BG_SIZE / 10)}ms`,
                    }}
                    className='bg-square'
                />
            )
        }

        setBgSvgs(Hexs)
    }, [setBgSvgs])

    return (
        <div className='main-bg'>
            {/* --------------Squares--------------- */}
            {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={`0 0 ${BG_SIZE} ${BG_SIZE}`}
                style={
                    WINWID > window.innerHeight
                        ? { width: '100%' }
                        : { height: '100%' }
                }
            >
                <g
                    fill='none'
                    stroke='#272727'
                    strokeWidth='1'
                    strokeMiterlimit='10'
                    strokeOpacity='0'
                >
                    {BgSvgs.map(item => item)}
                </g>
            </svg> */}

            {/* --------------Hexs--------------- */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={`${(BG_SIZE / 2) * -1} ${
                    (BG_SIZE / 2) * -1
                } ${BG_SIZE} ${BG_SIZE}`}
                style={
                    WINWID > window.innerHeight
                        ? { width: '100%' }
                        : { height: '100%' }
                }
            >
                <g
                    fill='none'
                    stroke='#272727'
                    stroke-width='1'
                    stroke-miterlimit='10'
                    stroke-opacity='0'
                >
                    {BgSvgs.map(item => item)}
                </g>
            </svg>
        </div>
    )
}

export default MainBg
