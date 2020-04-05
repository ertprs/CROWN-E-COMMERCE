import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import signInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/Firebase";
export class App extends Component {
  state = {
    currentUser: null,
  };
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={signInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
