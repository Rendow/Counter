import {Redirect, Route, Switch} from 'react-router-dom'
import React, {useEffect} from "react";
import Display from "./Display";
import Setting from './Setting/Setting';
import {setValue} from "../Redux/thirdCounter-reducer";
import {useDispatch} from "react-redux";

function Routes() {

    const dispatch = useDispatch()

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if (maxValue && startValue) {
            dispatch(setValue(JSON.parse(maxValue), JSON.parse(startValue)))
        }
    },[] )

    return (

        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={'/Counter'}/> } />
                <Route path={'/Counter'}  render={() => <Display/>}/>
                <Route path={'/settings'} render={() => <Setting/>}/>

                <Route render={() => <Display/>}/>

            </Switch>
        </div>
    )
}


export default Routes