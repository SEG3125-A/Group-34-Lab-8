// src/components/AboutUs.jsx
import React from 'react';
import Layout from './Layout';

function AboutUs() {
  return (
    <Layout>
      <h1>Welcome to the Homepage</h1>
      {<div>
      <h1>About GreenFuture</h1>
      <p>We are dedicated to conserving the environment for future generations.</p>
      <section>
        <h2>Our Mission</h2>
        <p>To educate and engage the community in environmental conservation efforts.</p>
      </section>
      <section>
        <h2>Impact to Date</h2>
        {/* These stats would ideally be dynamically loaded */}
        <ul>
          <li>100+ projects completed</li>
          <li>5,000+ volunteers engaged</li>
          <li>$1 million in donations raised</li>
        </ul>
      </section>
    </div>}
    </Layout>
    
  );
}

export default AboutUs;
