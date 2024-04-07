import React from "react";

import "./main.css";

import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="about-hero-section">
      <div className="about-hero-right">
        <h1>
          Unleash the power of <span className="h1-sapn">efficient</span>{" "}
          project management
        </h1>
        <p>
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together
        </p>
        <br />

        <div className="about-subscribe-form">
          <div className="about-email-input-container">
            <AiOutlineMail className="about-email-icon" />
            <input
              type="email"
              className="about-subscribe-input"
              placeholder="Enter email address"
            />

            <button className="about-subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="about-right-image">
        {" "}
        <img
          src={
            "https://img.freepik.com/free-photo/medium-shot-smiley-man-sitting-desk_23-2149927603.jpg"
          }
          id="banner"
          alt="Hero Banner"
        />
        <div className="about-column-1">
          <div className="about-img-container">
            <img src={require("../../assests/member-1.png")} alt="" />
            <img src={require("../../assests/member-2.png")} alt="" />
            <img src={require("../../assests/member-3.png")} alt="" />
            <img src={require("../../assests/member-4.png")} alt="" />
            <img src={require("../../assests/member-5.png")} alt="" />
          </div>
          <div>
            <p>
              <b>10+ million</b> <br /> users use our product worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
