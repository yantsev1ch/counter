import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    title: string,
    onClick?: () => void
    disabled?: boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <div className={style.item}>
            <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
        </div>
    )
}