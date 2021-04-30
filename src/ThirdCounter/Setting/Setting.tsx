import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import s from "./SecondCounter.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReduxStateType} from "../../Redux/redux";
import {onChangeMax, onChangeMin, setValueToLS} from "../../Redux/thirdCounter-reducer";


function Setting() {
    let value = useSelector<ReduxStateType, any>(state => state.thirdCounter)

    const dispatch = useDispatch()

    const [startUseValue, setStartValue] = useState(value.startValue)
    const [maxUseValue, setMaxValue] = useState(value.maxValue)

    useEffect(() => {
        setStartValue(value.startValue)
        setMaxValue(value.maxValue)
    }, [value])

    const onClick = () => {
        dispatch(setValueToLS(maxUseValue,startUseValue))
    }
    const ChangeMax = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(onChangeMax(+e.currentTarget.value))
    }
    const ChangeMin = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(onChangeMin(+e.currentTarget.value))
    }

    let error = value.error
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
                                    onChange={ChangeMax}
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
                                    onChange={ChangeMin}
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