import React from 'react';
import './Setting.css';


type ButtonsType = {
    title: string
    action: () => void
    disabled: boolean
    className: string
}

function Button(props: ButtonsType) {

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

export default Button