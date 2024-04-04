import React from "react";
import Tools from "../Components/tools/Tools";

import Main from "../Components/AboutUs-hero/Main";
import Count from "../Components/AboutUs-counter/Count";
import { Features1 } from "./AboutUs-feature/Features1";

const AboutUs = () => {
  return (
    <>
      <Main />
      <Count />
      <Features1 />
      <Tools />
    </>
  );
};
export default AboutUs;
