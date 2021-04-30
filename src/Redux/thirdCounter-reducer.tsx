import {Dispatch} from "redux";

let InitialState = {
    startValue:0,
    maxValue:0,
    count:0,
    error:false
}
export type InitialStateType = {
    startValue:number,
    maxValue:number,
    count:number,
    error:boolean
}

export const thirdCounterReducer = (state:InitialStateType = InitialState, action:DispatchType ):InitialStateType => {


    switch (action.type) {
        case 'INC_VALUE':
            return {...state,
            count: state.count + 1}

        case 'RES_VALUE':
            return {...state,
                count: state.startValue}

        case 'SET_VALUE':
            return {...state,
                startValue:action.startValue,
                maxValue:action.maxValue,
                count:action.startValue
            }
        case 'MAX_VALUE':
            const isError = action.value <=state.startValue || action.value < 0
            return {
                ...state,
                maxValue:action.value,
                error: isError
            }

        case 'MIN_VALUE': {
            const isError = action.value >= state.maxValue || action.value < 0
            return {
                ...state,
                startValue: action.value,
                error: isError
            }
        }
        default:
            return state
    }

}

export type DispatchType = IncValueACActionType | ResValueACActionType | SetValueACActionType | OnChangeMaxACActionType | OnChangeMinACActionType

type IncValueACActionType = ReturnType<typeof incValueAC>
type ResValueACActionType = ReturnType<typeof resValueAC>
type SetValueACActionType = ReturnType<typeof setValue>
type OnChangeMaxACActionType = ReturnType<typeof onChangeMax>
type OnChangeMinACActionType = ReturnType<typeof onChangeMin>

export const incValueAC = () => {
    return {
        type: 'INC_VALUE'
    } as const
}
export const resValueAC = () => {
    return {
        type: 'RES_VALUE'
    } as const
}

export const setValue = (maxValue:number, startValue:number) => {
    return {
        type: 'SET_VALUE', maxValue, startValue
    } as const
}
 export const onChangeMax = (value:number) => {
     return {
         type: 'MAX_VALUE', value
     } as const
 }
 export const onChangeMin = (value:number) => {
     return {
         type: 'MIN_VALUE', value
     } as const
 }


 export const setValueToLS = (maxUseValue:number, startUseValue:number) => {
     return (dispatch: Dispatch<DispatchType>) => {
         dispatch(setValue(maxUseValue, startUseValue))
         localStorage.setItem('maxValue', JSON.stringify(maxUseValue));
         localStorage.setItem('startValue', JSON.stringify(startUseValue));
 }}
export const getValueFromLS = () => {
    return (dispatch: Dispatch<DispatchType>) => {
        document.title = "Counter"
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue && startValue) {
            dispatch(setValue(JSON.parse(maxValue), JSON.parse(startValue)))
    }}
}