import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="WasteWise Logo" />
          <span>WasteWise</span>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
