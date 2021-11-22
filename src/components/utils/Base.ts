import React from 'react'

export const go = (url?: string | URL | undefined) => window.open(url)
export const GetTouchPosX = (event: React.TouchEvent) =>
    event.touches[0] ? event.touches[0].clientX : 0
export const GetTouchPosY = (event: React.TouchEvent) =>
    event.touches[0] ? event.touches[0].clientY : 0

export const GoFullScreen = (selector: string) => {
    const element = document.querySelector(selector)

    if (!element || !document.fullscreenEnabled) return

    if (document.fullscreenElement === element) {
        document.exitFullscreen()
    } else {
        element.requestFullscreen()
    }
}
