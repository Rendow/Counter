import React from 'react';
import {connect} from "react-redux";
import Display from "./Display";
import {ReduxStateType} from "../../Redux/redux";
import {Dispatch} from "redux";
import {incValueAC, InitialStateType, resValueAC} from "../../Redux/counter-reducer";


export type MapStateToPropsType = {
    counter: InitialStateType
}
export type MapDispatchToPropsType = {
    incValue:() => void
    resValue:() => void
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
         incValue: () => {
         dispatch(incValueAC())
        },
        resValue: () => {
            dispatch(resValueAC())
        }
}
}
const mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        counter: state.counter
    }
}


const DisplayContainer = connect(mapStateToProps,mapDispatchToProps)(Display)

export default DisplayContainer