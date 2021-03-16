import React from 'react';
import './App.css';

type DisplayType = {
    count:number
    maxValue:number
    error:boolean
}

function Display(props:DisplayType) {

    const displayClass = props.count === props.maxValue ? 'maks' : 'display'
    return ( props.error ? <div className='displayWrap'> error </div> :
        <div className='displayWrap'>
            <div className={displayClass}> {props.count}</div>
        </div>
    )
}

export default Display