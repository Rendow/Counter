import React from 'react';
import './App.css';

type DisplayType = {
    count:number
    maxValue:number
    error:boolean
    button:boolean
}

function Display(props:DisplayType) {

    const displayClass = props.count === props.maxValue ? 'maks' : 'display'
    return (
        <div className='displayWrap'>
            {props.error ? <div className={'displayError'}> Incorrect value! </div> : !props.button ? <div className={'displaySet'}>  Push set button </div> : <div className={displayClass}> {props.count}</div>}

        </div>

    )
}

export default Display


