
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

export const counterReducer = (state:InitialStateType = InitialState, action:DispatchType ):InitialStateType => {


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
type SetValueACActionType = ReturnType<typeof setValueAC>
type OnChangeMaxACActionType = ReturnType<typeof onChangeMaxAC>
type OnChangeMinACActionType = ReturnType<typeof onChangeMinAC>

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

export const setValueAC = (maxValue:number, startValue:number) => {
    return {
        type: 'SET_VALUE', maxValue:maxValue, startValue:startValue
    } as const
}
 export const onChangeMaxAC = (value:number) => {
     return {
         type: 'MAX_VALUE', value
     } as const
 }
 export const onChangeMinAC = (value:number) => {
     return {
         type: 'MIN_VALUE', value
     } as const
 }
