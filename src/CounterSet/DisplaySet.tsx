import React, { ChangeEvent } from 'react';
import './AppSet.module.css';
import s from './AppSet.module.css';



type DisplayType = {
    title:string
    value:number
    setValue?:any
    error:boolean
    ErrorValue:any
    setButton:any
}

function DisplaySet(props:DisplayType) {

   const inputClass = props.error ? s.input + ' ' + s.error : s.input
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
        props.setButton(false)
        props.ErrorValue()
    }

    const displayClass = s.display
    return (
        <div className={s.displayWrap}>
           <span className={displayClass}> {props.title}</span>
            <div ><input
                className={inputClass}
                type="number"
                value={props.value}
                onChange={onChange}
            /></div>
        </div>
    )
}

export default DisplaySet

/*
*/
