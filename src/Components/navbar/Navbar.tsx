// import React from "react";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../button/Button";
import menuImg from "../../assests/menu.png";

import "./styles.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="navContainer">
      <div className="leftContainer">
        <h2>
          <img
            id="img-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0b2SryskiqY5WGrIg3uPven_7VKvqdLewHC2BUP0TMg&s"
            alt="Logo"
          />
          <span className="loogo">Droit UI</span>
        </h2>
        <ul className={isMenuOpen ? "show" : ""}>
          <li>
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>

          <li>
            <Link className="link" to={"/about-us"}>
              About Us
            </Link>
          </li>

          <li>
            <Link className="link" to={"/contact-us"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to={"/pricing"}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <a href="#!" className="signIn">
          Sign in
        </a>
        {/* <button className="btn11">Get Started</button> */}
        <Button>Get Started</Button>
        <img
          src={menuImg}
          className="menu-icon"
          onClick={toggleMenu} // Use curly braces and pass the function reference
          alt="Menu"
        />
      </div>
    </div>
  );
};

export default Navbar;
