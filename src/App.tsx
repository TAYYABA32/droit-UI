import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ConactUs from "./Pages/ContactUs";
import Pricing from "./Pages/Pricing";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ConactUs} />
        <Route path="/pricing" component={Pricing} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
