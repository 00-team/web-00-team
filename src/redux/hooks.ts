import {
    TypedUseSelectorHook,
    useDispatch as RD,
    useSelector as RS,
} from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => RD<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = RS
