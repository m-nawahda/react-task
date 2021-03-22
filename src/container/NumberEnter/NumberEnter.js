import React, { Component } from "react";
import classes from "./NumberEnter.module.css";
import FormNumber from "../../components/FormNumber/FormNumber";
class NumberEnter extends Component {
  render() {
    return (
      <div className={classes.Box}>
        <FormNumber />
      </div>
    );
  }
}

export default NumberEnter;
