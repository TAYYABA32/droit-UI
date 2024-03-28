import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <div className="navContainer">
      <div className="leftContainer">
        <h2>
          <img
            id="img-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0b2SryskiqY5WGrIg3uPven_7VKvqdLewHC2BUP0TMg&s"
            alt="Logo"
          />
          <span>Droit UI</span>
        </h2>
        <ul>
          <li id="fa-prodcuts">
            <span> Products</span> <FaAngleDown />
          </li>
          <li>Compnents</li>
          <li>Solutions</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="rightContainer">
        <h4>Sign in</h4>
        <button className="btn1">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
