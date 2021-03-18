import React, {useEffect, useState} from 'react';
import s from './AppSet.module.css';
import DisplaySet from './DisplaySet';
import ButtonSet from "./ButtonSet";

type AppSetType = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    maxValue: number
    startValue: number
    error: boolean
    setCount:(value: number) => void
    setButton:(value:boolean) => void
    button:boolean
    setError:(value:boolean) => void
}

function AppSet(props: AppSetType) {


    const set = () => {
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue));
        localStorage.setItem('startValue', JSON.stringify(props.startValue));
        localStorage.setItem('countValue', JSON.stringify(props.startValue))
        props.setCount(props.startValue)
        props.setButton(true)
    }


    return (
        <div className={s.App}>
            <div className={s.Wrapper}>

                <div><DisplaySet
                    title={'Max value:'}
                    value={props.maxValue}
                    setValue={props.setMaxValue}
                    error={props.error}
                    setButton={props.setButton}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    setError={props.setError}
                /></div>
                <div><DisplaySet
                    title={'Start value:'}
                    value={props.startValue}
                    setValue={props.setStartValue}
                    error={props.error}
                    setButton={props.setButton}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    setError={props.setError}
                /></div>

                <div className={s.buttons}>

                    <ButtonSet disabled={props.button}   action={set} title='set' className={s.incr}/>

                </div>
            </div>
        </div>
    );
}

export default AppSet;
