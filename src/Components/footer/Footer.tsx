import React from "react";
import "./footer.css"; // Import the CSS file directly
import {
  FaFacebook,
  FaPinterestP,
  FaInstagramSquare,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mainContainer">
      {" "}
      {/* Use regular class names without the 'styles' object */}
      <div className="container">
        <div className="row row1">
          <div className="row22">
            <img
              id="img-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0b2SryskiqY5WGrIg3uPven_7VKvqdLewHC2BUP0TMg&s"
              alt="Logo"
            />
            <h3>Droit Ui</h3>
          </div>
          <p>
            Create fantastic digital interactions that bring additional joy to
            the world.
          </p>
          <div className="icons">
            <FaFacebook />
            <FaPinterestP />
            <FaInstagramSquare />
            <FaTwitter />
            <FaDiscord />
          </div>
        </div>
        <div className="row row2">
          <h2>Company</h2>
          <p>About Us</p>
          <p>Features</p>
          <p>Our Blogs</p>
          <p>Integrations</p>
          <p>Use Cases</p>
        </div>
        <div className="row row3">
          <h2>Category</h2>
          <p>Booking</p>
          <p>Contact Us</p>
          <p>Jobs</p>
          <p>Privacy Policy</p>
          <p>Features </p>
        </div>
        <div className="row row4">
          <h2>Products</h2>
          <p>Tutorials</p>
          <p>Feedback</p>
          <p>Overview</p>
          <p>Pricing</p>
        </div>
        <div className="row row5">
          <h2>Marketing</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Settings</p>
          <p>Community</p>
          <p>Customers</p>
        </div>
      </div>
      <div className="copyright">
        <hr className="hr" />
        <p>© 2024 Droit UI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
