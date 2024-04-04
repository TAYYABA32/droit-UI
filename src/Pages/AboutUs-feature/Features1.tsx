import React from "react";
import "./features1.css";
import { MdGroup } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { PiShootingStarBold } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";

export const Features1 = () => {
  return (
    <div className=" container-12">
      <div>
        <h1>The most powerful features</h1>
        <p>
          The first Unified Go-to-market platform,Distrobrid has all the tools
          you need to <br />
          effortlessly run your sales organization
        </p>
      </div>

      <div className="container-2">
        <div className="roww">
          <div className="card">
            <MdGroup className="iicon" />
            <h4>Unlimited User Seats</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="card">
            <TbSparkles className="iicon" />
            <h4>Powerful Semantic Search</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="card">
            <BsGraphUpArrow className="iicon" />
            <h4>User-friendly Analytics</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="roww1">
          <div className="card">
            <PiShootingStarBold className="iicon" />
            <h4>Custom Unified Feedback</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="card">
            <FaMagic className="iicon" />
            <h4>Auto-generated Themes</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="card">
            <FaClock className="iicon" />
            <h4>Continuously Updated</h4>
            <p>
              {" "}
              Bring your entire team into Enterpret without <br />
              prohibitive costs and foster a culture of <br />
              customer-centric strategy{" "}
            </p>
            <div className="view">
              <p>View Details </p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
