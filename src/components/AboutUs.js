import React from 'react';
import Layout from './Layout';

function AboutUs() {
  return (
    <Layout>
      <div className="container my-5">
        <h1 className="fw-bold mb-4">About GreenFuture</h1>
        <p className="lead">We are dedicated to conserving the environment for future generations.</p>
        <section className="my-4">
          <h2 className="fw-bold">Our Mission</h2>
          <p>To educate and engage the community in environmental conservation efforts.</p>
        </section>
        <section className="my-4">
          <h2 className="fw-bold">Impact to Date</h2>
          <ul className="list-unstyled">
            <li><strong>100+</strong> projects completed</li>
            <li><strong>5,000+</strong> volunteers engaged</li>
            <li><strong>$1 million</strong> in donations raised</li>
          </ul>
        </section>
        
      </div>
    </Layout>
  );
}

export default AboutUs;
