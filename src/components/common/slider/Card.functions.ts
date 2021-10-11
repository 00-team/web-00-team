export const GetTouchPos = (event: React.TouchEvent) =>
    event.touches[0] ? event.touches[0].clientX : 0

export const GetClassByPos = (pos: number): string => {
    switch (pos) {
        case 0:
            return ' c'
        case 1:
            return ' n1'
        case 2:
            return ' n2'
        case -1:
            return ' p1'
        case -2:
            return ' p2'
        default:
            return ''
    }
}

export const GetCardPos = (
    index: number,
    CardIndex: number,
    ListLength: number
): number => {
    const maxIndex = ListLength - 1

    // current
    if (index === CardIndex) return 0

    // previous level 1
    if (CardIndex - 1 === index || (index === maxIndex && CardIndex === 0))
        return -1

    // next level 1
    if (CardIndex + 1 === index || (index === 0 && CardIndex === maxIndex))
        return 1

    if (ListLength >= 7) {
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
