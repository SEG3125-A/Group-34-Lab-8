// src/components/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Homepage.css';


function Homepage() {
  return (


    <Layout>
      {
        <div className="homepage-container">
        <header className="homepage-header">
          <h1 className="title">Protecting Our Planet Together</h1>
          <p className="subtitle">Join us in our efforts to make a difference.</p>
        </header>
        <section className="donation-progress-section">
          <h2>Donation Progress</h2>
          <progress className="donation-progress-bar" value="70" max="100"></progress>
          <p>70% towards our goal!</p>
        </section>
      </div>
      }
    </Layout>
    
  );
}

export default Homepage;
