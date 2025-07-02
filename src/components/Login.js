import React, { useState } from 'react';
import { saveUser } from '../utils/localStorage';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    // Save username to localStorage
    saveUser(username.trim());
    
    // Call the parent callback to update app state
    onLogin(username.trim());
    
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>📋 Personal Task Tracker</h1>
        <p>Welcome! Please enter your username to continue.</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className={error ? 'error' : ''}
              autoFocus
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          
          <button type="submit" className="login-btn">
            Enter Task Tracker
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 