import React, {useState} from 'react';
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
}

function AppSet(props: AppSetType) {


    const set = () => props.setMaxValue && props.setStartValue

    return (
        <div className={s.App}>
            <div className={s.Wrapper}>

                <div><DisplaySet
                    title={'Max value:'}
                    value={props.maxValue}
                    setValue={props.setMaxValue}
                    error={props.error}
                    ErrorValue={props.ErrorValue}
                /></div>
                <div><DisplaySet
                    title={'Start value:'}
                    value={props.startValue}
                    setValue={props.setStartValue}
                    error={props.error}
                    ErrorValue={props.ErrorValue}
                /></div>

                <div className={s.buttons}>

                    <ButtonSet disabled={props.error} action={set} title='set' className={s.incr}/>

                </div>
            </div>
        </div>
    );
}

export default AppSet;
