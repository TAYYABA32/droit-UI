import React from "react";
import heroImg from "../../assests/01.png";
import "./styles.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <img src={heroImg} id="banner" alt="Hero Banner" />
      <div className="hero-right">
        <h1>
          Unleash the power of <span>efficient</span> project management
        </h1>
        <p>
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together
        </p>
        <br />
        <div className="btn-container">
          <button className="btn2">Get Started</button>
          <button className="btn1">See How it Works</button>
        </div>
        <div className="column-1">
          <div className="img-container">
            <img src={require("../../assests/member-1.png")} />
            <img src={require("../../assests/member-2.png")} />
            <img src={require("../../assests/member-3.png")} />
            <img src={require("../../assests/member-4.png")} />
            <img src={require("../../assests/member-5.png")} />
          </div>
          <div>
            <p>
              <b>10+ million</b> users use our <br /> product worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
