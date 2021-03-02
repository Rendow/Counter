import React from 'react';
import './App.css';

type DisplayType = {
    count:number
}

function Display(props:DisplayType) {

    const displayClass = props.count === 5 ? 'maks' : 'display'
    return (
        <div className='displayWrap'>
            <div className={displayClass}> {props.count}</div>
        </div>
    )
}

export default Display