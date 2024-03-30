import React from "react";
import "./signup.css";
import { AiOutlineMail } from "react-icons/ai";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-left">
        <h1>Sign up and get our updates</h1>
        <p>
          Get insider access to our company by subscribing to our newsletter and{" "}
          <br />
          stay informed about our products, services, and initiatives.
        </p>
      </div>
      <div>
        {" "}
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
        <div className="email-policy">
          <p>
            We care about your data in our <a href="">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
