import React from 'react';

const Login = ({ onRegisterClick, onLoginSuccess }) => {
  return (
    <div className="card">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button onClick={onLoginSuccess}>Login</button>
      <p>
        Don't have an account?{' '}
        <button className="link" onClick={onRegisterClick}>Create account</button>
      </p>
    </div>
  );
};

export default Login;
