import React from "react";
import "./tools.css";
import { FaArrowRight } from "react-icons/fa";
const Tools = () => {
  return (
    <div>
      <div className="con-tools">
        <h1>Connect with an necessary tools</h1>
        <p>
          Integration brings of all your favourite tools, languages, and data
          sources together in one platform.
        </p>
      </div>
      <div className="container3">
        <div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s1.png")} alt="" />

            <h5>Slack</h5>
          </div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s2.png")} alt="" />
            <h5>Gitlab</h5>
          </div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s3.png")} alt="" />
            <h5>Loom</h5>
          </div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s4.png")} alt="" />
            <h5>Notion</h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s5.jpeg")}
              alt=""
            />
            <h5>Confluence</h5>
          </div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s6.png")} alt="" />
            <h5>Toolbox </h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s7.webp")}
              alt=""
            />
            <h5>Google</h5>
          </div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s8.png")} alt="" />
            <h5>Sketch</h5>
          </div>
        </div>
        <div>
          <div className="img-tool">
            <img className="img" src={require("../../assests/s9.png")} alt="" />
            <h5>Framer </h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s10.png")}
              alt=""
            />
            <h5>Github</h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s11.png")}
              alt=""
            />
            <h5>Marvel </h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s12.jpeg")}
              alt=""
            />
            <h5>Mailchimp</h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s13.jpeg")}
              alt=""
            />
            <h5>Excel</h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s14.png")}
              alt=""
            />
            <h5>Team </h5>
          </div>
          <div className="img-tool">
            <img
              className="img"
              src={require("../../assests/s15.png")}
              alt=""
            />
            <h5>Zapier</h5>
          </div>
        </div>
      </div>
      <div className="view1">
        <p>View integration</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Tools;
