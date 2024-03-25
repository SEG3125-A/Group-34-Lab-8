import React from 'react';
import Layout from './Layout';
import './Homepage.css';

function Homepage() {
  return (
    <Layout>
      <div className="homepage-container pt-5">
        
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="c2.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Join the Green Revolution: Every Action Counts</h5>

                </div>
            </div>
            <div className="carousel-item">
                <img src="c1.jpeg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Together for a Thriving Planet</h5>

                </div>
            </div>
            <div className="carousel-item">
                <img src="c3.jpg" className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Innovate, Sustain, Regenerate</h5>

                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
        

       
        <section className="donation-progress-section my-5">
          <h2 className="text-center mb-3">Donation Progress</h2>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
        </section>

        

        {/* Featured content section */}
        <section className="featured-content-section my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card">
                <img src="mexico.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Vibrant Heritage, Warm Sunsets</h5>
                  <p className="card-text">Discover Mexico's rich cultural tapestry and breathtaking landscapes.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="thailand.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Land of Smiles, Gateway to Wonders</h5>
                  <p className="card-text">Discover Thailand's rich cultural tapestry and breathtaking landscapes.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src="rwanda.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Majestic Gorillas, Lush Hills</h5>
                  <p className="card-text">Embark on a journey through Rwanda's green heart, where nature meets harmony.</p>
                </div>
              </div>
            </div>

            
            



          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Homepage;
