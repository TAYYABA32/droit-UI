import React from "react";
import "./count.css";

const Count = () => {
  return (
    <div className="count-parent">
      <div>
        <p>Helping to grow the next generation of 5000+ companies</p>
        <div className="count">
          <div className="count-img">
            <img src={require("../../assests/q1.png")} alt="" />
            <h1>Quantum</h1>
          </div>
          <div className="count-img">
            <img src={require("../../assests/q2.png")} alt="" />
            <h1>Chroma</h1>
          </div>
          <div className="count-img">
            <img src={require("../../assests/q3.png")} alt="" />
            <h1>Spectrum</h1>
          </div>
          <div className="count-img">
            <img src={require("../../assests/q4.png")} alt="" />
            <h1>Dynamo</h1>
          </div>
          <div className="count-img">
            <img src={require("../../assests/q5.png")} alt="" />
            <h1>Bookzone</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
