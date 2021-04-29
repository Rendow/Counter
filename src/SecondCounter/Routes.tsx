import {Redirect, Route, Switch} from 'react-router-dom'
import React, {useEffect} from "react";
import DisplayContainer from "./Display/DisplayContainer";
import SettingContainer from "./Setting/SettingContainer";
import {connect} from "react-redux";
import {setValueAC} from "../Redux/counter-reducer";
import {Dispatch} from "redux";

type MapDispatchPropsType = {
    setValue: (max: number, start: number) => void
}

function Routes(props: MapDispatchPropsType) {
    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue && startValue) {
            props.setValue(JSON.parse(maxValue), JSON.parse(startValue))
        }
    },[] )

    return (

        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={'/Counter'}/> } />
                <Route path={'/Counter'}  render={() => <DisplayContainer/>}/>
                <Route path={'/settings'} render={() => <SettingContainer/>}/>

                <Route render={() => <DisplayContainer/>}/>

            </Switch>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setValue:(max:number, start: number) => {
            let action = setValueAC(max, start)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Routes)