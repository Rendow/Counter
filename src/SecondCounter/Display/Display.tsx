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

    let countValue = props.counter.count

    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <div className={s.display}> {countValue} </div>

                <div className={s.buttons}>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        onClick={incValue}
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