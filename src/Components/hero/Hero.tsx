import React from "react";
import heroImg from "../../assests/01.png";
import "./styles.css";
import Button from "../button/Button";
import { COLORS } from "../../constants/colors";

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
          {/* <button className="btn2">Get Started</button>
          <button className="btn1">See How it Works</button> */}
          <Button>Get Started</Button>
          <Button
            bgColor="white"
            textColor={COLORS.theme_color}
            borderColor={COLORS.theme_color}
          >
            See How it Works
          </Button>
        </div>
        <div className="column-1">
          <div className="img-container">
            <img src={require("../../assests/member-1.png")} alt="" />
            <img src={require("../../assests/member-2.png")} alt="" />
            <img src={require("../../assests/member-3.png")} alt="" />
            <img src={require("../../assests/member-4.png")} alt="" />
            <img src={require("../../assests/member-5.png")} alt="" />
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
