import React from "react";
import heroImg from "../../assests/01.png";
import "./main.css";
import Button from "../button/Button";
import { COLORS } from "../../constants/colors";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="hero-section">
      <div className="hero-right">
        <h1>
          Unleash the power of <span>efficient</span> project management
        </h1>
        <p>
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together
        </p>
        <br />
       
        <div className="subscribe-form">
          <div className="email-input-container">
            <AiOutlineMail className="email-icon" />
            <input
              type="email"
              className="subscribe-input"
              placeholder="Enter email address"
            />

            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
       
      </div>
      <div className="right-image">
        {" "}
        <img
          src={
            "https://img.freepik.com/free-photo/medium-shot-smiley-man-sitting-desk_23-2149927603.jpg"
          }
          id="banner"
          alt="Hero Banner"
        />
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
              <b>10+ million</b> <br /> users use our  product worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
