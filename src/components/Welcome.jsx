import React from "react";
import "./Welcome.css";

function Welcome({ onCreateAccountClick, onLoginClick }) {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="create-btn" onClick={onCreateAccountClick}>Create Account</button>
        <button className="login-btn" onClick={onLoginClick}>Already Registered? Login</button>
      </div>
    </div>
  );
}

export default Welcome;
