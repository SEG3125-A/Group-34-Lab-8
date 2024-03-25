import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faHandsHelping, faDonate } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Ensure the path is correct for your project structure

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">GreenFuture</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
              <Link className="nav-link" to="/about-us">
                <FontAwesomeIcon icon={faUsers} /> About Us
              </Link>
              <Link className="nav-link" to="/get-involved">
                <FontAwesomeIcon icon={faHandsHelping} /> Get Involved
              </Link>
              <Link className="nav-link" to="/donate">
                <FontAwesomeIcon icon={faDonate} /> Donate
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        {children} {/* This is where the page content will be rendered */}
      </div>
    </>
  );
};

export default Layout;
