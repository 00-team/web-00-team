import React from 'react'

export const go = (url?: string | URL | undefined) => window.open(url)
export const GetTouchPosX = (event: React.TouchEvent) =>
    event.touches[0] ? event.touches[0].clientX : 0
export const GetTouchPosY = (event: React.TouchEvent) =>
    event.touches[0] ? event.touches[0].clientY : 0
