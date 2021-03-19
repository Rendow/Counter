import React, { ChangeEvent } from 'react';
import './Setting.module.css';
import s from './Setting.module.css';



type DisplayType = {
    title:string
    value:number
    error:boolean
    changeValue: (value: number) => void
}

function InputDisplay(props:DisplayType) {

   const inputClass = props.error ? s.input + ' ' + s.error : s.input
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.valueAsNumber)

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

export default InputDisplay

