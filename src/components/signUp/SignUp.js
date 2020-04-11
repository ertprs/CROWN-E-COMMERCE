import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/Firebase";
import "./SignUp.scss";
import CustomButton from "../CustomButton/CustomButton";
export class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match" });
      return setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    }
    if (!displayName) {
      this.setState({ error: "Please enter a display name" });
      return setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
      return setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    }
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <h3 style={{ color: "red" }}>{this.state.error}</h3>
          <FormInput
            type="name"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Enter Name"
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Enter Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
