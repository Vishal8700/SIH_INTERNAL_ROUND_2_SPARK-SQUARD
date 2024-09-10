import React from "react";
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Sentinal Rick. All rights reserved.</p>
        <p className="footer-note">Crafted with care and dedication.</p>
      </div>
    </footer>
  );
};

export default Footer;
