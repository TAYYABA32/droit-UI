import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Counter from "./Components/counter/Counter";
import Features from "./Components/features/Features";
import Tools from "./Components/tools/Tools";
import Designer from "./Components/uidesigner/Designer";
import Frequently from "./Components/frequently/Frequently";
import Signup from "./Components/signup/Signup";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Counter />
      <Features />
      <Tools />
      <Designer />
      <Frequently />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
