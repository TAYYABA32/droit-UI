import React, { useState } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import "./frequently.css";
import { faqData } from "./data";

const Frequently = (props = { headvisible: true }) => {
  const { headvisible } = props;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="freq">
      <div>
        {headvisible ? (
          <div>
            <h1>Frequently asked questions</h1>
            <p>
              Some questions about DroitUI are asked frequently. We've answered
              the most <br /> frequent of those frequent questions below.
            </p>
          </div>
        ) : (
          <div></div>
        )}

        {faqData.map((item, index) => (
          <div key={index}>
            <div className="question" onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              {activeIndex === index ? <BsDash /> : <BsPlus />}
            </div>
            {activeIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="find-1">
          <p>
            Didn’t find the answer you are looking for?{" "}
            <span> Contact our support </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
