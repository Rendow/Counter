import React from 'react';
import './AppSet.module.css';


type ButtonsType = {
    title: string
    action: () => void
    disabled: boolean
    className: string
}

function ButtonSet(props: ButtonsType) {
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

export default ButtonSet