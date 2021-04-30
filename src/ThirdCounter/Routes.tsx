import {Redirect, Route, Switch} from 'react-router-dom'
import React, {useEffect} from "react";
import Display from "./Display";
import Setting from './Setting/Setting';
import {getValueFromLS, setValue} from "../Redux/thirdCounter-reducer";
import {useDispatch} from "react-redux";

function Routes() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getValueFromLS())
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