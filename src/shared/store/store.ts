import { configureStore } from '@reduxjs/toolkit'
import homePage from './slices/home-page'

export const makeStore = () => {
    return configureStore({
        reducer: {
            homePage: homePage.reducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
