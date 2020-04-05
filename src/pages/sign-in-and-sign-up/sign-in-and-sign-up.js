import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./sign-in-and-sign-up.scss";
const signInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signInAndSignUp;
