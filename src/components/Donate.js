// src/components/Donate.jsx
import React, { useState } from 'react';
import Layout from './Layout';

function Donate() {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonation = (event) => {
    event.preventDefault();
    alert(`Thank you for your generous donation of $${donationAmount}!`);
    setDonationAmount(''); // Reset donation amount after submission
  };

  return (
    <Layout>
      <h1>Welcome to the Homepage</h1>
      {<div>
      <h1>Donate to GreenFuture</h1>
      <p>Your support is crucial for our ongoing projects.</p>
      <form onSubmit={handleDonation}>
        <label>
          Donation Amount ($):
          <input 
            type="number" 
            value={donationAmount} 
            onChange={(e) => setDonationAmount(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>}
    </Layout>
    
  );
}

export default Donate;
