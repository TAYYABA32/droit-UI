import React, { useState } from "react";
import "./login.css";
import Button from "../Components/button/Button";

const Login = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
  return (
    <div className="container11">
      <div className="signup-form1">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {/* <button type="submit">Sign Up</button> */}
          <Button widthProp="full">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
