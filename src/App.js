import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/Sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/userAction";
import { updateItemCount } from "./actions/cartActions";
import Checkout from "./pages/checkout/Checkout";
export class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    // localStorage.removeItem("test");
    const storedItems = localStorage.getItem("test");
    let itemCount;
    if (storedItems) {
      itemCount = JSON.parse(storedItems).length;
    } else {
      itemCount = 0;
    }
    this.props.updateItemCount(itemCount);
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
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser, updateItemCount })(
  App
);
