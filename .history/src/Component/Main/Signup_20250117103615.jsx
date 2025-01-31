import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  let [state, setState] = useState({
    uname: "",
    email: "",
    pass: "",
    confirmpass: "",
  });
  let [check, setCheck] = useState(false);
  let [error, setError] = useState("");
  let navigate = useNavigate();
  let { uname, email, pass, confirmpass } = state;

  let handleChnage = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleChangeCheck = (e) => {
    let { checked } = e.target;
    setCheck(checked);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!/[A-Za-z0-9!@$%#]/.test(uname)) {
      setError("Username must contain at least one special character");
    } else if (pass !== confirmpass) {
      setError("Passwords do not match");
    } else if (!uname || !email || !pass || !confirmpass) {
      setError("All fields are required");
    } else if (!check) {
      setError("You must agree to the terms and conditions");
    } else {
      setError("");
      try {
        let payload = { uname, email, pass, confirmpass };
        let { data } = await axios.post("http://localhost:3000/user", payload);
        alert("Data stored successfully");
        navigate("/login");
      } catch (err) {
        console.error("Error while signing up:", err);
        setError("An error occurred while submitting the form");
      }
    }
  };

  return (
    <div id="signup-part">
      <div id="sigup-box">
        <div id="signup-heading">
          <div id="signup-details">
            <h1>Sign up</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="signup-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="uname"
                  value={uname}
                  placeholder="Your Name"
                  onChange={handleChnage}
                  required
                />
                <span></span>
              </div>
              <div className="signup-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={handleChnage}
                  required
                />
                <span></span>
              </div>
              <div className="signup-group">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="pass"
                  value={pass}
                  placeholder="Password"
                  onChange={handleChnage}
                  required
                />
              </div>
              <div className="signup-group">
                <i className="fa-solid fa-key"></i>
                <input
                  type="password"
                  name="confirmpass"
                  value={confirmpass}
                  placeholder="Confirmation Password"
                  onChange={handleChnage}
                  required
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  value="check"
                  id="checkbox"
                  onChange={handleChangeCheck}
                  required
                />
                <span>
                  I Agree All Statement in <Link>Terms of Service</Link>
                </span>
              </div>
              <div id="already-login">
                <h1>
                  Already have an account?
                  <Link className="Login-signup" to="/login">Log in</Link>
                </h1>
              </div>
              <input type="submit" value="REGISTER" id="submit" />
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt=""
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
