import React from 'react';
import disposalImg from '../assets/images/disposal.jpg';
import recycleImg from '../assets/images/recycle.png';
import collectionImg from '../assets/images/collection.jpeg';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Services</h2>
        <div className="service-grid">
          <div className="service">
            <img src={disposalImg} alt="Waste Disposal" />
            <h3>Waste Disposal</h3>
            <p>We have developed strong relationships with disposal facilities, landfills, and incinerators. These relationships are only fully permitted and have facilities to safely manage your waste.</p>
            <button>Enquire Now</button>
          </div>
          <div className="service">
            <img src={recycleImg} alt="Waste Recycling" />
            <h3>Waste Recycling</h3>
            <p>Recycling is the process of converting waste materials into new useful products, reducing pollution and waste disposal needs.</p>
            <button>Enquire Now</button>
          </div>
          <div className="service">
            <img src={collectionImg} alt="Waste Collection & Transportation" />
            <h3>Waste Collection</h3>
            <p>We work with licensed and insured transportation companies, ensuring they have the necessary permits for safe waste transport.</p>
            <button>Enquire Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
