import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import s from "./SecondCounter.module.css";
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./SettingContainer";


type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

function Setting(props: DialogPropsType) {
    const [startUseValue, setStartValue] = useState(props.counter.startValue)
    const [maxUseValue, setMaxValue] = useState(props.counter.maxValue)

    useEffect(() => {
        setStartValue(props.counter.startValue)
        setMaxValue(props.counter.maxValue)
    }, [props.counter])

    const onClick = () => {
        props.setValue(maxUseValue, startUseValue)
        localStorage.setItem('maxValue', JSON.stringify(maxUseValue));
        localStorage.setItem('startValue', JSON.stringify(startUseValue));
    }
    const onChangeMax = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.onChangeMax(+e.currentTarget.value)
    }
    const onChangeMin = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        props.onChangeMin(+e.currentTarget.value)
    }

    let error = props.counter.error

    return (
        <div>

            <div className={s.wrap}>
                <div className={s.content}>
                    <div className={s.display}>
                        <div className={s.countWrap}>
                            <div className={error ? s.error : ''} style={{paddingTop: '4px'}}>MAX VALUE:</div>
                            <div>
                                <TextField
                                size={'small'}
                                variant={'outlined'}
                                error={error}
                                type="number"
                                value={maxUseValue}
                                onChange={onChangeMax}
                            /></div>
                        </div>
                        <div className={s.countWrap}>
                            <div className={error ? s.error : ''} style={{paddingTop: '4px'}}>MIN VALUE:</div>
                            <div>
                                <TextField
                                size={'small'}
                                variant={'outlined'}
                                type="number"
                                value={startUseValue}
                                error={error}
                                onChange={onChangeMin}
                            /></div>
                        </div>
                    </div>

                    <div className={s.buttons}>
                        <NavLink className={s.nav} to={'/Counter'}>
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                size={'large'}
                                disabled={error}
                                onClick={onClick}>
                                set
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Setting