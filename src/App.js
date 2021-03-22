import classes from "./App.module.css";
import { Component } from "react";
import NumberEnter from "./container/NumberEnter/NumberEnter";
import PlayRegion from "./container/PlayRegion/PlayRegion";
import { Switch, Route } from "react-router";
import Congrats from "./container/Congrats/Congrats";
class App extends Component {
  state = {
    actualNumber: null,
  };
  setNumberHandler = (number, props) => {
    this.setState({ actualNumber: number }, () => {
      props.history.push("/play");
    });
  };
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => (
              <NumberEnter
                submit={(value) => {
                  this.setNumberHandler(value, props);
                }}
                {...props}
              />
            )}
          />
          <Route
            path="/play"
            render={(props) => (
              <PlayRegion excpectedValue={+this.state.actualNumber} {...props} />
            )}
          />
          <Route path="/congrat" component={Congrats}/>
        </Switch>
      </div>
    );
  }
}

export default App;
