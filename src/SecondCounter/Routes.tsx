import {Redirect, Route, Switch} from 'react-router-dom'
import React from "react";
import DisplayContainer from "./Display/DisplayContainer";
import SettingContainer from "./Setting/SettingContainer";

function Routes() {
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

export default Routes