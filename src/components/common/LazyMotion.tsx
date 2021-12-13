import React, { FC, useEffect, useRef, useState, CSSProperties } from 'react'

interface LazyStyleProps {
    init: CSSProperties
    end: CSSProperties
}

interface LazyMotionProps {
    MotionDir?: 'X' | 'Y'
    MotionLength?: number
}

const LazyMotion: FC<LazyMotionProps> = ({
    children,
    MotionDir = 'X',
    MotionLength = -200,
}) => {
    const LazyRef = useRef<HTMLDivElement>(null)
    const [isIntersecting, setIntersecting] = useState(false)
    const [LazyStyle, setLazyStyle] = useState<LazyStyleProps>({
        init: { transition: 'all 700ms ease-out', opacity: 0 },
        end: { transition: 'all 700ms ease-out', opacity: 1 },
    })

    useEffect(() => {
        if (LazyRef.current && !isIntersecting) {
            var observer = new IntersectionObserver(([entry]) => {
                if (entry && entry.isIntersecting) {
                    setIntersecting(entry.isIntersecting)
                    observer.disconnect()
                }
            })

            observer.observe(LazyRef.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [LazyRef])

    useEffect(() => {
        if (MotionDir === 'X') {
            setLazyStyle({
                init: {
                    ...LazyStyle.init,
                    transform: `translateX(${MotionLength}px)`,
                },
                end: { ...LazyStyle.end, transform: `translateX(0px)` },
            })
        } else {
            setLazyStyle({
                init: {
                    ...LazyStyle.init,
                    transform: `translateY(${MotionLength}px)`,
                },
                end: { ...LazyStyle.end, transform: `translateY(0px)` },
            })
        }
    }, [MotionDir, MotionLength, setLazyStyle])

    return (
        <div
            ref={LazyRef}
            className='lazy-div'
            style={isIntersecting ? LazyStyle.end : LazyStyle.init}
        >
            {children}
        </div>
    )
}

export default LazyMotion
