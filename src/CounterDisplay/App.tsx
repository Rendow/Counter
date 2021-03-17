import React, {useState} from 'react';
import './App.css';
import Display from './Display';
import Button from "./Button";


type AppType = {
    maxValue:number
    startValue:number
    setCount:any
    count:number
    error:boolean
    button:any
}

function AppSet(props:AppType) {

    const incr = () => props.count < props.maxValue ? props.setCount(props.count + 1) : ''

    const res = () => {props.setCount(props.startValue)}


    return (
        <div className="App">
            <div className='Wrapper'>

                <Display button={props.button} error={props.error} count={props.count} maxValue={props.maxValue}/>

                <div className='buttons'>

                <Button disabled={props.count  == props.maxValue || !props.button || props.error} action={incr} title='incr' className='incr'/>
                <Button disabled={props.count == props.startValue || !props.button || props.error} action={res} title='res' className='res'/>

                </div>
            </div>
        </div>
    );
}

export default AppSet;
