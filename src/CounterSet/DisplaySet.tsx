import React from 'react';
import './AppSet.module.css';
import s from './AppSet.module.css';



type DisplayType = {
    title:string
    value:number
    setValue?:any
    error:boolean
    ErrorValue:any
}

function DisplaySet(props:DisplayType) {

   const inputClass = props.error ? s.input + ' ' + s.error : s.input

    const displayClass = s.display
    return (
        <div className={s.displayWrap}>
           <span className={displayClass}> {props.title}</span>
            <div ><input
                className={inputClass}
                type="number"
                value={props.value}
                onBlur={props.ErrorValue}
                onChange={(event) => {props.setValue(event.currentTarget.value)}}
            /></div>
        </div>
    )
}

export default DisplaySet

/*
*/
