// Header.jsx
import React from "react";
import './Header.css'; // Import the CSS file

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title">Sentinal Rick</div>
        <nav>
          <ul className="header-nav">
            <li><a href="/" className="nav-link" id="txt">Home</a></li>
            {isLoggedIn && (
              <>
                <li><a href="/chat" className="nav-link">Chat</a></li>
                <li><a href="/dashboard" className="nav-link">Dashboard</a></li>
              </>
            )}
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
            <li>
              {isLoggedIn ? (
                <button className="nav-button" onClick={onLogout}>
                  Logout
                </button>
              ) : (
                <button className="nav-button" onClick={() => window.location.href='/Auth'}>
                  Login/Signup
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;