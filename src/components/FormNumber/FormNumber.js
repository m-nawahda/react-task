import React from "react";
import classes from "./FormNumber.module.css";
import { NavLink } from "react-router-dom";

const FormNumber = (props) => {
  const [value, setValue] = React.useState(1);
  const valueChangedHandler = (event) => setValue(event.target.value);
  return (
    <form>
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
      <NavLink className={classes.NextBtn} to={"/play/" + value}>
        <input type="submit" value="Next-->" />
      </NavLink>
    </form>
  );
};

export default FormNumber;
