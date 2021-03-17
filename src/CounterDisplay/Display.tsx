import React from 'react';
import './App.css';

type DisplayType = {
    count:number
    maxValue:number
    error:boolean
    button:any
}

function Display(props:DisplayType) {

    const displayClass = props.count === props.maxValue ? 'maks' : 'display'
    return (
        <div className='displayWrap'>
            { props.error && <div > error </div>}
            { !props.button && <div > set value </div>}
            {props.button && !props.error &&<div className={displayClass}> {props.count}</div>}
        </div>

    )
}

export default Display


/*
<div>
{if(props.error ){
    <div className='displayWrap'> error </div>
} else if (props.button){
    <div className='displayWrap'> set value </div>
} else {
    <div className='displayWrap'>
        <div className={displayClass}> {props.count}</div>
    </div>
}} </div>

)*/
/*
props.error ? <div className='displayWrap'> error </div> :
    <div className='displayWrap'>
        <div className={displayClass}> {props.count}</div>
    </div>*/
