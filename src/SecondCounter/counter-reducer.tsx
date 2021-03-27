
 let InitialState = {
    button:true,
    startValue:0,
    maxValue:0,
    count:0,
    error:false
}
export type InitialStateType = {
    button:boolean,
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

        default:
            return state
    }

}

export type DispatchType = IncValueACActionType | ResValueACActionType | SetValueACActionType

type IncValueACActionType = ReturnType<typeof incValueAC>
type ResValueACActionType = ReturnType<typeof resValueAC>
type SetValueACActionType = ReturnType<typeof setValueAC>

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
