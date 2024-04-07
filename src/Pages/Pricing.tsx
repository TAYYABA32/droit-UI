import React from "react";
import Button from "../Components/button/Button";

import Frequently from "../Components/frequently/Frequently";

const Pricing = () => {
  return (
    <>
      <div>
        <div>
          <h1>Simple pricing to level up your brand</h1>
          <p>
            Simple pricing. No hidden fees. Advanced features for your business
          </p>
          <div>
            <div>
              <h3>Starter Plan</h3>
              <p>For most businesses that want to optimize web queries</p>

              <h1>$40</h1>
              <p>/per month</p>
              <ul>
                <li>Everything in design & development</li>
                <li>Strategy workshop</li>
                <li>Priority support</li>
                <li>Multiple tasks at once</li>
                <li>Ongoing autonomous A/B testing</li>
                <li>Advanced custom development</li>
              </ul>
              <Button bgColor="#FFFFFF" textColor="white">
                Get Started
              </Button>
            </div>
          </div>
          <div>
            <div>
              <h3>Professional</h3>
              <p>For most businesses that want to optimize web queries</p>

              <h1>$40</h1>
              <p>/per month</p>
              <ul>
                <li>Everything in design & development</li>
                <li>Strategy workshop</li>
                <li>Priority support</li>
                <li>Multiple tasks at once</li>
                <li>Ongoing autonomous A/B testing</li>
                <li>Advanced custom development</li>
              </ul>
              <Button bgColor="#FFFFFF" textColor="white">
                Get Started
              </Button>
            </div>
          </div>

          <div>
            <div>
              <h3>Business</h3>
              <p>For most businesses that want to optimize web queries</p>

              <h1>$40</h1>
              <p>/per month</p>
              <ul>
                <li>Everything in design & development</li>
                <li>Strategy workshop</li>
                <li>Priority support</li>
                <li>Multiple tasks at once</li>
                <li>Ongoing autonomous A/B testing</li>
                <li>Advanced custom development</li>
              </ul>
              <Button bgColor="#FFFFFF" textColor="white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Frequently />
    </>
  );
};
export default Pricing;
