import React, {useEffect, useState} from 'react';
import s from './AppSet.module.css';
import DisplaySet from './DisplaySet';
import ButtonSet from "./ButtonSet";

type AppSetType = {
    setStartValue: any
    setMaxValue: any
    maxValue: any
    startValue: any
    error: boolean
    ErrorValue:any
    setCount:any
    count:any
    setButton: any
    button:boolean
}

function AppSet(props: AppSetType) {


    const set = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue));
        localStorage.setItem('startValue', JSON.stringify(props.startValue));
        localStorage.setItem('countValue', JSON.stringify(props.startValue))
        props.setCount(Number(props.startValue))
        props.setButton(true)
    }

      /*  props.setMaxValue && props.setStartValue*/

    return (
        <div className={s.App}>
            <div className={s.Wrapper}>

                <div><DisplaySet
                    title={'Max value:'}
                    value={props.maxValue}
                    setValue={props.setMaxValue}
                    error={props.error}
                    ErrorValue={props.ErrorValue}
                    setButton={props.setButton}
                /></div>
                <div><DisplaySet
                    title={'Start value:'}
                    value={props.startValue}
                    setValue={props.setStartValue}
                    error={props.error}
                    ErrorValue={props.ErrorValue}
                    setButton={props.setButton}
                /></div>

                <div className={s.buttons}>

                    <ButtonSet disabled={props.button}   action={set} title='set' className={s.incr}/>

                </div>
            </div>
        </div>
    );
}

export default AppSet;
