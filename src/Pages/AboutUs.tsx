import React from "react";
import Tools from "../Components/tools/Tools";
import Features from "../Components/features/Features";
// import Hero from "../Components/hero/Hero";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Main from "../Components/AboutUs-hero/Main";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Main />
      <Tools />
      <Features />
      <Footer />
    </>
  );
};
export default AboutUs;
