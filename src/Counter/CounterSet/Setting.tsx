import React, {useEffect, useState} from 'react';
import s from './Setting.module.css';
import InputDisplay from './InputDisplay';
import SetButton from "./SetButton";

type AppSetType = {
    maxValue: number
    startValue: number
    error: boolean
    setCount: (value: number) => void
    setButton: (value: boolean) => void
    button: boolean
    changeStartValue: (startValue: number) => void
    changeMaxValue: (maxValue: number) => void
}

function Setting(props: AppSetType) {


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

                <div>
                    <InputDisplay
                    title={'Max value:'}
                    value={props.maxValue}
                    error={props.error}
                    changeValue={props.changeMaxValue}
                />
                </div>
                <div>
                    <InputDisplay
                    title={'Start value:'}
                    value={props.startValue}
                    error={props.error}
                    changeValue={props.changeStartValue}
                />
                </div>

                <div className={s.buttons}>

                    <SetButton disabled={props.button} action={set} title='set' className={s.incr}/>

                </div>
            </div>
        </div>
    );
}

export default Setting;
