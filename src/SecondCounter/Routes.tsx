import {Redirect, Route, Switch } from 'react-router-dom'
import Setting from "./Setting";
import React from "react";
import Display from './Display';

function Routes() {
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