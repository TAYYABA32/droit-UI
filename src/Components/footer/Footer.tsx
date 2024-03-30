import React from "react";
import styles from "./footer.module.scss";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.row1}`}>
          <div className={styles.row22}>
            <img
              id="img-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0b2SryskiqY5WGrIg3uPven_7VKvqdLewHC2BUP0TMg&s"
              alt="Logo"
            />
            <h3>Droit Ui</h3>
          </div>
          <p>
            Create fantastic digital interactions that <br /> bring additional
            joy to the world.
          </p>
          <div className={styles.icons}>
            <FaFacebook />
            <FaPinterestP />
            <FaInstagramSquare />
            <FaXTwitter />
            <FaDiscord />
          </div>
        </div>
        <div className={`${styles.row} ${styles.row2}`}>
          <h2>Company</h2>
          <p> About Us</p>
          <p>Features</p>
          <p>Our Blogs</p>
          <p>Integrations</p>
          <p>Use Cases</p>
        </div>
        <div className={`${styles.row} ${styles.row3}`}>
          <h2>Category</h2>
          <p>Booking</p>
          <p>Contact Us</p>
          <p>Jobs</p>
          <p>Privacy Policy</p>
          <p>Features </p>
        </div>
        <div className={`${styles.row} ${styles.row4}`}>
          <h2>Webinars</h2>
          <p>Tutorials</p>
          <p>Feedback</p>
          <p>Overview</p>
          <p>Pricing</p>
        </div>
        <div className={`${styles.row} ${styles.row5}`}>
          <h2>Marketing</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Settings</p>
          <p>Community</p>
          <p>Customers</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <hr className={styles.hr} />
        <p>© 2024 Droit UI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
