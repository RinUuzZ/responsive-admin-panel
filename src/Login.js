import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctEmail = "ollinwonofficial@gmail.com";
  const correctPassword = "ollinwon123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else if (email !== correctEmail || password !== correctPassword) {
      setError("Incorrect email or password.");
    } else {
      setError("");
      onLogin(true);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 style={{ color: 'black' }}>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {
          error && <div className="error-message">{error}</div>
        }
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
