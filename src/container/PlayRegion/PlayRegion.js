import React from "react";
import Numbers from "../../components/Numbers/Numbers";
import classes from "./PlayRegion.module.css";

const PlayRegion = (props) => {
  const initValue = Math.floor(Math.random() * 100) + 1;
  const [excpectedValue, setExcpectedValue] = React.useState(initValue);
  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(100);
  const [numbers, setNumbers] = React.useState([]);
  const actualValue = React.useRef(props.excpectedValue);

  const addNumberHandler = (min, max) => {
    let array = [...numbers];
    array.push(excpectedValue);
    setNumbers(array);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const setMaxHandler = () => {
    const updatedMax = excpectedValue - 1;
    setMax(updatedMax);
    setExcpectedValue(addNumberHandler(min, updatedMax));
    validateRange(min, updatedMax);
  };

  const setMinHandler = () => {
    const updatedMin = excpectedValue + 1;
    setMin(updatedMin);
    setExcpectedValue(addNumberHandler(updatedMin, max));
    validateRange(updatedMin, max);
  };

  const validateEqualityHandler = () => {
    if (excpectedValue === +actualValue.current) {
      props.history.replace("/congrat");
    } else {
      alert("You have failed :(");
      props.history.replace("/");
    }
  };

  const validateRange = (min, max) => {
    if (actualValue.current > max || actualValue.current < min) {
      alert("you have fail!");
      props.history.replace("/");
    }
  };

  return (
    <div className={classes.Box}>
      <div className={classes.CurrentNumber}>{excpectedValue}</div>
      <div className={classes.ArrowsContainer}>
        <button
          aria-label="greater than"
          className={classes.Arrow}
          onClick={setMinHandler}
        >
          <i className="icon fas fa-arrow-up" />
        </button>
        <button
          aria-label="equal"
          className={classes.Arrow}
          onClick={validateEqualityHandler}
        >
          <i className="icon las la-equals" />
        </button>
        <button
          aria-label="less than"
          className={classes.Arrow}
          onClick={setMaxHandler}
        >
          <i className="icon fas fa-arrow-down" />
        </button>
      </div>
      <Numbers numbers={numbers} />
    </div>
  );
};

export default PlayRegion;
