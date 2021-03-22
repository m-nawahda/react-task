import React from "react";
import Numbers from "../../components/Numbers/Numbers";
import classes from "./PlayRegion.module.css";

const PlayRegion = (props) => {
  const initValue = Math.floor(Math.random() * 100) + 1;
  const [excpectedValue, setExcpectedValue] = React.useState(initValue);
  const [min, setMin] = React.useState(1);
  const [max, setMax] = React.useState(100);
  const [numbers, setNumbers] = React.useState([]);
  const isFirstRender = React.useRef(true);
  const actualValue = React.useRef(props.match.params.value);

  const addNumberHandler = () => {
    let array = [...numbers];
    array.push(excpectedValue);
    setNumbers(array);
    let expectedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setExcpectedValue(expectedNumber);
  };

  const setMinHandler = () => {
    const updatedMax = excpectedValue - 1;
    setMax(updatedMax);
  };

  const setMaxHandler = () => {
    const updatedMin = excpectedValue + 1;
    setMin(updatedMin);
  };

  const validateEqualityHandler = () => {
    if (excpectedValue === +actualValue.current) {
      alert("You got the true number!");
    } else {
      alert("You have failed :(");
    }
    props.history.replace("/");
  };

  const validateRange = () => {
    if (max === min || actualValue.current > max || actualValue.current < min) {
      alert("you have fail!");
      props.history.replace("/");
    }
  };

  React.useEffect(() => {
    if (!isFirstRender.current) {
      addNumberHandler();
    }
  }, [min, max]);

  React.useEffect(() => {
    if (!isFirstRender.current) {
      validateRange();
    }
  }, [excpectedValue]);

  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <div className={classes.Box}>
      <div className={classes.CurrentNumber}>{excpectedValue}</div>
      <div className={classes.ArrowsContainer}>
        <div className={classes.Arrow} onClick={setMaxHandler}>
          <i className="icon fas fa-arrow-up" />
        </div>
        <div className={classes.Arrow} onClick={validateEqualityHandler}>
          <i className="icon las la-equals" />
        </div>
        <div className={classes.Arrow} onClick={setMinHandler}>
          <i className="icon fas fa-arrow-down" />
        </div>
      </div>
      <Numbers numbers={numbers} />
    </div>
  );
};

export default PlayRegion;
