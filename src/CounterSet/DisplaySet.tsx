import React, { ChangeEvent } from 'react';
import './AppSet.module.css';
import s from './AppSet.module.css';



type DisplayType = {
    title:string
    value:number
    setValue:(value:number) => void
    error:boolean
    setButton:(value:boolean) => void
    maxValue:number
    startValue:number
    setError:(value:boolean) => void
}

function DisplaySet(props:DisplayType) {

   const inputClass = props.error ? s.input + ' ' + s.error : s.input
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        props.setButton(false)
        if (props.startValue === e.currentTarget.valueAsNumber || props.maxValue === e.currentTarget.valueAsNumber || e.currentTarget.valueAsNumber < 0 ){
            props.setError(true)
            props.setButton(true)
        }
        props.setValue(e.currentTarget.valueAsNumber)


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
