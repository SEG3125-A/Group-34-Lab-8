// src/components/GetInvolved.jsx
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
      <h1>Welcome to the Homepage</h1>
      {<div>
      <h1>Get Involved</h1>
      <p>Learn how you can help us make a difference.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Sign up for volunteer opportunities:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>}
    </Layout>
    
  );
}

export default GetInvolved;
