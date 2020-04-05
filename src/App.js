import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import signInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/userAction";
export class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: { ...snapshot.data(), id: snapshot.id },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={signInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { setCurrentUser })(App);
