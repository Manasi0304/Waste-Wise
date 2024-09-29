import React from 'react';
import plasticImg from '../assets/images/plastic.png';
import ewasteImg from '../assets/images/ewaste.png';
import metalImg from '../assets/images/metal.png';
import wasteImg from '../assets/images/waste.png';

const WeTreat = () => {
  return (
    <section className="we-treat">
      <div className="container">
        <h2>We Accept</h2>
        <div className="service-grid">
          <div className="service">
            <img src={plasticImg} alt="Plastic Wastes" />
            <h3>Plastic Wastes</h3>
          </div>
          <div className="service">
            <img src={ewasteImg} alt="E-Wastes" />
            <h3>E-Wastes</h3>
          </div>
          <div className="service">
            <img src={metalImg} alt="Metallic Wastes" />
            <h3>Metallic Wastes</h3>
          </div>
          <div className="service">
            <img src={wasteImg} alt="waste" />
            <h3>Other Reusable Wastes</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeTreat;
