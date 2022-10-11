import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    const { text, icon, subduedButton } = props;
    const classBtn = `flex a-center gap-1 ${classes.button} ' ' ${subduedButton ? classes.subduedBtn : ""}`;
    return (
        <button className={classBtn}>
            {text} {icon}
        </button>
    )
}
export default Button;