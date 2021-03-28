import React from 'react';
import {connect} from "react-redux";
import Setting from "./Setting";
import {InitialStateType, onChangeMaxAC, onChangeMinAC, setValueAC} from "../counter-reducer";
import {ReduxStateType} from "../redux";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    counter: InitialStateType
}
export type MapDispatchToPropsType = {
    setValue: (maxValue:number, startValue:number) => void
    onChangeMax: (value:number) => void
    onChangeMin: (value:number) => void
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        setValue: (maxValue:number, startValue:number) => {
          let action = setValueAC(maxValue,startValue)
            dispatch(action)
        },
         onChangeMax:(value:number) => {
             let action = onChangeMaxAC(value)
             dispatch(action)
        },
        onChangeMin:(value:number) => {
            let action = onChangeMinAC(value)
            dispatch(action)
        }
    }
}
const mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        counter: state.counter
    }
}

const SettingContainer = connect(mapStateToProps,mapDispatchToProps)(Setting)

export default SettingContainer