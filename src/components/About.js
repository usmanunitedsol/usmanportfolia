import React from 'react'
import AboutCard from './AboutCard';
import laptopImg from '../images/about.png'
import Skillset from './Skillset';
import Tools from './Tools';

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="container">
        
        <div className="row" style={{ padding: "10px" }}>
          <div
             className='col-md-7'
            style={{justifyContent: "center",paddingTop: "30px",paddingBottom: "50px",}}>
            <h1 className="text-center"  style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </div>

          <div className='col-md-5 about-img' style={{ paddingTop: "120px", paddingBottom: "50px" }} >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
        <Skillset/>
        <Tools/>
      </div>
    </div>
  );
}

export default About
