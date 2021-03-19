import React from 'react';
import './Setting.css';
import ValueDisplay from './ValueDisplay';
import Button from "./Button";


type AppType = {
    maxValue:number
    startValue:number
    setCount:(value: number) => void
    count:number
    error:boolean
    button:boolean
}

function Display(props:AppType) {

    const incr = () => props.count < props.maxValue ? props.setCount(props.count + 1) : ''

    const res = () => {props.setCount(props.startValue)}


    return (
        <div className="App">
            <div className='Wrapper'>

                <ValueDisplay button={props.button} error={props.error} count={props.count} maxValue={props.maxValue}/>

                <div className='buttons'>

                <Button disabled={props.count  == props.maxValue || !props.button || props.error} action={incr} title='incr' className='incr'/>
                <Button disabled={props.count == props.startValue || !props.button || props.error} action={res} title='res' className='res'/>

                </div>
            </div>
        </div>
    );
}

export default Display;
