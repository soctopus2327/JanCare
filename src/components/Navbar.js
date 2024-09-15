// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/components/logo.png" alt="Logo" className="logo" /> 
        <h3>E-Governance for Everyone</h3>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/issues">Issues</Link>
        <Link to="/upvote">Upvote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
