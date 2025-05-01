import React from 'react';

const Register = ({ onLoginClick, onRegisterSuccess }) => {
  return (
    <div className="card">
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Company Name" />
      <div className="radio-group">
        <label>Are you an Agency?</label>
        <label><input type="radio" name="agency" /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>
      <button onClick={onRegisterSuccess}>Create Account</button>
      <p>
        Already registered?{' '}
        <button className="link" onClick={onLoginClick}>Login</button>
      </p>
    </div>
  );
};

export default Register;
