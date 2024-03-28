import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Counter from "./Components/counter/Counter";
import Features from "./Components/features/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Counter />
      <Features />
    </div>
  );
}

export default App;
