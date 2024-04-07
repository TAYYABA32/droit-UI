import React from "react";
import "./contact.css";
import { IoMail } from "react-icons/io5";
import Button from "../Components/button/Button";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ConactUs = () => {
  return (
    <>
      <div className="wrapper">
        <div className="contact-head">
          <h1>Contact Us</h1>
          <p>
            Describe your project and leave us your contact info, we’ll get back
            to you within 24 hours.
          </p>
          <br />
          <ul className="unorderlist1">
            <li>
              {" "}
              <IoMail className="tag-list" /> &nbsp; <b>contact@droitui.com</b>
            </li>
            <br />
            <li>
              {" "}
              <FaPhoneAlt className="tag-list" /> &nbsp;{" "}
              <b> +1 (555) 333-9494 </b>
            </li>
            <br />
            <li>
              {" "}
              <IoLocationSharp className="tag-list" /> &nbsp;{" "}
              <b>110 Sample St, New York, NY USA</b>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <div className="row33">
            <div>
              <label htmlFor="firstname">First name</label>
              <br />
              <input type="text" placeholder="First name" />
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <br />
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <br />
          <div className="row33">
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" placeholder="example@mail.com" />
            </div>
            <div>
              <label htmlFor="phonenumber">Phone number</label>
              <br />
              <input type="text" placeholder="+1 (555) 333-9494" />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="chooseatopic">Choose a topic</label>
            <br />
            <select name="chooseatopic" id="chooseatopic">
              <option value=""> Select one</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="mesg">Message</label>
            <br />
            <textarea
              name="mesg"
              id="mesg"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <br />
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="iaccepttheterms"
              id="iaccepttheterms"
            />{" "}
            <label htmlFor="iaccepttheterms">I accept the term</label>
          </div>
          <br />
          <Button bgColor="#FFFFFF" textColor="white">
            Get Started
          </Button>
        </div>
      </div>
      {/* <button className="button12">Get Started</button> */}
    </>
  );
};
export default ConactUs;
