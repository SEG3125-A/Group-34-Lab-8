import React, { useState } from 'react';
import Layout from './Layout';

function GetInvolved() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for signing up, ${email}! We will be in touch soon.`);
    setEmail(''); // Reset email field after submission
  };

  return (
    <Layout>
      <div className="container py-5">
        <h1 className="mb-4">Get Involved</h1>
        <p className="mb-4">Learn how you can help us make a difference.</p>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="mb-3">
            <label htmlFor="volunteerEmail" className="form-label">
              Sign up for volunteer opportunities:
            </label>
            <input 
              type="email"
              className="form-control"
              id="volunteerEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default GetInvolved;
