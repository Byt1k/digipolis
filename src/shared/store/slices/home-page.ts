import { createSlice } from '@reduxjs/toolkit'
import { ICalculatorService } from '@/shared'

interface SelectedCaseType {
    name: string
    index: number
}

interface HomePageState {
    service: string
    cases: SelectedCaseType[]
    calculatorServices: ICalculatorService[]
}

const initialState: HomePageState = {
    service: '',
    cases: [],
    calculatorServices: [],
}

const homePageSlice = createSlice({
    name: 'home-page',
    initialState,
    reducers: {
        selectService: (state, { payload }: { payload: string }) => {
            state.service = payload
        },

        changeCases: (state, { payload }: { payload: SelectedCaseType }) => {
            if (state.cases.some(c => c.index === payload.index)) {
                state.cases = state.cases.filter(c => c.index !== payload.index)
            } else {
                state.cases.push(payload)
            }
        },

        changeCalcServices: (
            state,
            { payload }: { payload: ICalculatorService },
        ) => {
            if (state.calculatorServices.some(c => c.name === payload.name)) {
                state.calculatorServices = state.calculatorServices.filter(
                    c => c.name !== payload.name,
                )
            } else {
                state.calculatorServices.push(payload)
            }
        },
    },
})

export default homePageSlice

export const { selectService, changeCases, changeCalcServices } =
    homePageSlice.actions
