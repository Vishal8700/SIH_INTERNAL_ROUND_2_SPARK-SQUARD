// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import './Auth.css';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Hardcoded credentials for testing
  const hardcodedEmail = 'test@example.com';
  const hardcodedPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials
    if (email === hardcodedEmail && password === hardcodedPassword) {
      setShowPopup(true);
      setError('');
      setIsLoggedIn(); // Call the handleLogin function
      // Automatically hide the popup after 3 seconds and navigate to the home screen
      setTimeout(() => {
        setShowPopup(false);
        navigate('/'); // Navigate to the home screen
      }, 3000);
      console.log('Logging in...', { email, password });
    } else {
      setError('Invalid email or password');
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <div className="auth-container">
      {showPopup && (
        <div className="popup-message">
          {isLogin ? 'Login successful!' : 'Registration successful!'}
        </div>
      )}
      <div className="auth-form">
        <div className="logo">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>Sentinal</span>
        </div>
        <h2>{isLogin ? 'Sign into your account' : 'Create an account'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}
          <button type="submit">{isLogin ? 'LOGIN' : 'SIGN UP'}</button>
        </form>
        <div className="auth-links">
          <a href="#">Forgot password?</a>
          <a href="#" onClick={toggleAuthMode}>
            {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
          </a>
        </div>
        <div className="terms-privacy">
          <a href="./">Terms of use</a>
          <a href="./">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default Login;