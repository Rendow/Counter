import React from 'react';
import s from '../Setting/SecondCounter.module.css'
import {Button} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {MapDispatchToPropsType, MapStateToPropsType} from "./DisplayContainer";

type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType


function Display(props: DialogPropsType) {

    const incValue = () => {
        props.incValue()
    }
    const resValue = () => {
        props.resValue()
    }

    let disabled = props.counter.maxValue === props.counter.count

    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <div className={disabled ? s.display + ' ' + s.error : s.display}> {props.counter.count} </div>

                <div className={s.buttons}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        onClick={incValue}
                        disabled={disabled}
                    >
                        inc </Button>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        onClick={resValue}
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