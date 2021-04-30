import React from 'react';
import s from './Setting/SecondCounter.module.css'
import {Button} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {incValueAC, resValueAC} from "../Redux/thirdCounter-reducer";
import {ReduxStateType} from "../Redux/redux";


function Display() {
    let value = useSelector<ReduxStateType, any>(state => state.thirdCounter)

    const dispatch = useDispatch()

    const incValue = () => {
        dispatch(incValueAC())
    }
    const resValue = () => {
        dispatch(resValueAC())
    }

    let disabledInc = value.maxValue === value.count
    let disabledRes = value.startValue === value.count

    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <div className={disabledInc ? s.display + ' ' + s.error : s.display}> {value.count} </div>

                <div className={s.buttons}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        onClick={incValue}
                        disabled={disabledInc}
                    >
                        inc </Button>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        onClick={resValue}
                        disabled={disabledRes}
                    >
                        reset </Button>

                    <NavLink className={s.nav} to='/settings'> <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                    >
                        Setting </Button>
                    </NavLink>


                </div>


            </div>
        </div>
    )

}

export default Display