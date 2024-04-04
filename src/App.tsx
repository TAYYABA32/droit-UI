import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/navbar/Navbar";
// import Hero from "./Components/hero/Hero";
// import Counter from "./Components/counter/Counter";
// import Features from "./Components/features/Features";
// import Tools from "./Components/tools/Tools";
// import Designer from "./Components/uidesigner/Designer";
// import Frequently from "./Components/frequently/Frequently";
// import Signup from "./Components/signup/Signup";
// import Footer from "./Components/footer/Footer";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

// const testimonials = [
//   // { id: 1, name: "John Doe", comment: "Great service, highly recommended!" },
//   // {
//   //   id: 2,
//   //   name: "Jane Smith",
//   //   comment: "Awesome experience with this company!",
//   // },
//   {
//     id: 3,
//     name: "Michael Johnson",
//     designation: "UI Designer",
//     comment:
//       "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
//     img: "member-1.png",
//     rating: [1, 2, 3],
//   },
//   {
//     id: 4,
//     name: "John Doe",
//     designation: "Web Designer",
//     comment:
//       "Updating content on my new website is a breeze. I can edit text, swap images, and add new sections in just a few clicks",
//     img: "member-2.png",
//     rating: [1, 2, 3, 4],
//   },
//   {
//     id: 5,
//     name: "Micheal Jackson ",
//     designation: "Software Engineer",
//     comment:
//       "Gone are the days of struggling with complicated interfaces. With my revamped site, I have full control over its content and layout.",
//     img: "member-3.png",
//     rating: [1, 2, 3, 4, 5],
//   },
//   // Add more testimonials as needed
// ];
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about-us" component={AboutUs} />
    </Router>
  );
}

export default App;
