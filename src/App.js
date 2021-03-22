import classes from "./App.module.css";
import { Component } from "react";
import NumberEnter from "./container/NumberEnter/NumberEnter";
import PlayRegion from "./container/PlayRegion/PlayRegion"
import { Switch, Route } from "react-router";
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route exact path="/" component={NumberEnter} />
          <Route path="/play/:value" component={PlayRegion} />

        </Switch>
      </div>
    );
  }
}

export default App;
