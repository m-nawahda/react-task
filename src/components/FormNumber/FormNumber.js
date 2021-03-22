import React from "react";
import classes from "./FormNumber.module.css";

const FormNumber = (props) => {
  const [value, setValue] = React.useState(1);
  const valueChangedHandler = (event) => setValue(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    props.submit(value);
  };
  return (
    <form onSubmit={submitHandler}>
      <label className={classes.TextFeild} htmlFor={classes.NumberFeild}>
        Please Enter a Number
      </label>
      <input
        id={classes.NumberFeild}
        className={classes.NumberFeild}
        type="number"
        min="1"
        max="100"
        onChange={valueChangedHandler}
      />
      <input className={classes.NextBtn} type="submit" value="Next-->" />
    </form>
  );
};

export default FormNumber;
