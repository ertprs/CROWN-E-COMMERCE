import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, isSignedIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isSignedIn ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
