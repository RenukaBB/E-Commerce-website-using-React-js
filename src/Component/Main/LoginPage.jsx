// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();
  const { email, pass } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError("All fields are required");
      return;
    }

    try {
      let { data } = await axios.get("http://localhost:3000/user");
      const user = data.find(
        (user) => user.email === email && user.pass === pass
      );

      if (user) {
        navigate("/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error while logging in:", err);
      setError("An error occurred while logging in");
    }
  };

  return (
    <div id="login-container">
      <form onSubmit={handleSubmit} id="login-form">
        <h1>Login Page</h1>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="pass"
          value={pass}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
