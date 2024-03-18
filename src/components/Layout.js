
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Adjust the path if necessary based on your project structure


const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/donate">Donate</Link>
        {/* Add other navigation links as needed */}
      </nav>
      <div>
        {children} {/* This is where the page content will be rendered */}
      </div>
    </>
  );
};

export default Layout;
