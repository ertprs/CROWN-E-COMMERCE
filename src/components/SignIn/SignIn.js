import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/Firebase";
export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            required
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isSignedIn type="submit">
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
