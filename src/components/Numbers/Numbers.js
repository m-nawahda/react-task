import classes from './Numbers.module.css'
import React from 'react'
import Number from "./Number/Number"
const Numbers = (props) => {
    const numbers = props.numbers.map(number => {
        return <Number value={number} key={number}/>
    })
    return (<div className={classes.Numbers}>{numbers}</div>);
}

export default Numbers
