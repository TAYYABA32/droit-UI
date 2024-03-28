import React from "react";
import "./features.css";
import { MdGroup } from "react-icons/md";
import { TbSparkles } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
const Features = () => {
  return (
    <div className=" container-1">
      <div>
        <h1>The most powerful features</h1>
        <p>
          The first Unified Go-to-market platform,Distrobrid has all the tools
          you need to <br />
          effortlessly run your sales organization
        </p>
      </div>

      <div className="container-2">
        <div className="card">
          <MdGroup className="icon" />
          <h1>Unlimited User Seats</h1>
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
          <TbSparkles className="icon" />
          <h1>Powerful Semantic Search</h1>
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
          <BsGraphUpArrow className="icon" />
          <h1>User-friendly Analytics</h1>
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
  );
};

export default Features;
