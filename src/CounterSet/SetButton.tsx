import React from 'react';
import './Setting.module.css';


type ButtonsType = {
    title: string
    action: () => void
    disabled: boolean
    className: string
}

function SetButton(props: ButtonsType) {
    return (
        <span>
            <button
                disabled={props.disabled}
                onClick={props.action}
                className={props.className}>
                {props.title}
            </button>
        </span>
    )
}

export default SetButton