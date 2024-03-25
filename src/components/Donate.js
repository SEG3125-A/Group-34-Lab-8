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
      <div className="container py-5">
        <h1 className="mb-3">Donate to GreenFuture</h1>
        <p className="mb-4">Your support is crucial for our ongoing projects.</p>
        <form onSubmit={handleDonation} className="mb-3">
          <div className="mb-3">
            <label htmlFor="donationAmount" className="form-label">
              Donation Amount ($):
            </label>
            <input 
              type="number" 
              className="form-control" 
              id="donationAmount" 
              value={donationAmount} 
              onChange={(e) => setDonationAmount(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-success">Donate</button>
        </form>
      </div>
    </Layout>
  );
}

export default Donate;
