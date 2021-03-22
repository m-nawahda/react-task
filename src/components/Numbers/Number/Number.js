import React from 'react'
import classes from "./Number.module.css"
const Number = (props) => {
    return (
        <div className={classes.Number}>
            {props.value}
        </div>
    )
}

export default Number
