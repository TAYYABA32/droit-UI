import React from "react";
import Button from "../Components/button/Button";
import "./pricing.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

import Frequently from "../Components/frequently/Frequently";

const Pricing = () => {
  return (
    <>
      <div className="pricing-parent">
        <div>
          <h1 className="h1-pri">Simple pricing to level up your brand</h1>
          <p className="pricing-p">
            Simple pricing. No hidden fees. Advanced features for your business
          </p>
          <div className="pricing-row">
            <div>
              <div className="pricing-col">
                <h3>Starter Plan</h3>
                <p>
                  For most businesses that want to optimize <br /> web queries
                </p>

                <h1>
                  $40 <span className="span-pricing">/per month</span>
                </h1>

                <ul className="ul-pricing">
                  <li>
                    {" "}
                    <FaCheckCircle /> Everything in design & development
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Strategy workshop
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Priority support
                  </li>
                  <li>
                    <FaCheckCircle />
                    Multiple tasks at once
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle />
                    Ongoing autonomous A/B testing
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Advanced custom development
                  </li>
                </ul>
                <Button bgColor="blue" textColor="white">
                  Get Started
                </Button>
              </div>
            </div>

            <div>
              <div className="pricing-col">
                <div className="frq-pr">
                  <div className="floatingButton">
                    {" "}
                    <FaCrown /> Popular
                  </div>
                </div>
                <h3>Professional</h3>

                <p>
                  For most businesses that want to optimize <br /> web queries
                </p>
                <h1>
                  $40 <span className="span-pricing">/per month</span>
                </h1>
                <ul className="ul-pricing">
                  <li>
                    {" "}
                    <FaCheckCircle /> Everything in design & development
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Strategy workshop
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Priority support
                  </li>
                  <li>
                    <FaCheckCircle />
                    Multiple tasks at once
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle />
                    Ongoing autonomous A/B testing
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Advanced custom development
                  </li>
                </ul>
                <Button bgColor="blue" textColor="white">
                  Get Started
                </Button>
              </div>
            </div>

            <div>
              <div className="pricing-col">
                <h3>Business</h3>
                <p>
                  For most businesses that want to optimize <br /> web queries
                </p>

                <h1>
                  $40 <span className="span-pricing">/per month</span>
                </h1>
                <ul className="ul-pricing">
                  <li>
                    {" "}
                    <FaCheckCircle /> Everything in design & development
                  </li>

                  <li>
                    {" "}
                    <FaCheckCircle /> Strategy workshop
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Priority support
                  </li>
                  <li>
                    <FaCheckCircle />
                    Multiple tasks at once
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle />
                    Ongoing autonomous A/B testing
                  </li>
                  <li>
                    {" "}
                    <FaCheckCircle /> Advanced custom development
                  </li>
                </ul>
                <Button bgColor="blue" textColor="white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-freq">
        <div className="pricing-head">
          <h1>Frequently asked questions</h1>
          <p>
            Some questions about DroitUI are asked frequently. We've answered
            the most <br /> frequent of those frequent questions below.
          </p>
          <Button bgColor="blue" textColor="white">
            View All Questions
          </Button>
        </div>
        <div className="fre-asked">
          <Frequently headvisible={false} />
        </div>
      </div>
    </>
  );
};
export default Pricing;
