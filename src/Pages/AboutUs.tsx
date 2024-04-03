import React from "react";
import Tools from "../Components/tools/Tools";

// import Hero from "../Components/hero/Hero";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Main from "../Components/AboutUs-hero/Main";
import Count from "../Components/AboutUs-counter/Count";
import { Features1 } from "./AboutUs-feature/Features1";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Main />
      <Count />
      <Features1 />
      <Tools />
      <Footer />
    </>
  );
};
export default AboutUs;
