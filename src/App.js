import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
