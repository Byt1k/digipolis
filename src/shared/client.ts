'use client'

export { useAppSelector, useAppDispatch, useAppStore } from './utils/hooks'

export {
    selectService,
    changeCases,
    changeCalcServices,
} from './store/slices/home-page'
