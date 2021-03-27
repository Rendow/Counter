import React, {ChangeEventHandler, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import s from "./SecondCounter.module.css";
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./SettingContainer";


type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

function Setting(props:DialogPropsType) {
    const [startValue,setStartValue] = useState(0)
    const [maxValue,setMaxValue] = useState(0)

    const onClick = () => {
        props.setValue(maxValue,startValue)
    }

    return (
        <div>

            <div className={s.wrap}>
                <div className={s.content}>
                    <div className={s.display}>
                            <div className={s.countWrap}>
                                <div style={{paddingTop: '4px'}}>MAX VALUE: </div>
                                <div><TextField
                                    size={'small'}
                                    variant={'outlined'}
                                    type="number"
                                    value={maxValue}
                                    onChange={(e)=>{setMaxValue(+e.currentTarget.value)}}
                                /></div>
                            </div>
                            <div className={s.countWrap}>
                                <div style={{paddingTop: '4px'}}>MIN VALUE:</div>
                                <div><TextField
                                    size={'small'}
                                    variant={'outlined'}
                                    type="number"
                                    value={startValue}
                                    onChange={(e)=>{setStartValue(+e.currentTarget.value)}}
                                /></div>
                            </div>
                    </div>

                    <div className={s.buttons}>
                        <NavLink className={s.nav} to={'/Counter'}>
                            <Button
                                variant={'contained'}
                                color={'primary'}
                                size={'large'}
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