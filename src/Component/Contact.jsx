import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handle = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...state}); 
  };

  return (
    <div>
      {/* Navbar Section */}
      <div id="navbar">
        <nav id="navbar-items">
          <div id="navbar-title">
            <h1>Your Next Store</h1>
          </div>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/Apparel">Apparel</Link>
          <Link className="link" to="/digital">Digital</Link>
          <Link className="link" to="/cart">Cart</Link>
          <Link className="link" to="/contact">Contact</Link>
        </nav>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* Contact Form Section */}
      <div id="contact">
        <div id="contact-item">
          <h3>Contact</h3>
          <form id="contact-item-all" onSubmit={handleSubmit}>
            <div className="item-all-contact">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={handle}
                required
              />
            </div>
            <div className="item-all-contact">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={state.email}
                onChange={handle}
                required
              />
            </div>
            <div className="item-all-contact">
              <label htmlFor="message">Message The Problem</label>
              <textarea
                name="message"
                id="message"
                value={state.message}
                onChange={handle}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* <div id="Subscribe-group"> */}
        <div id="Subscribe">
          <div id="border-down">
            {/* Left Section */}
            <div id="details-product-left">
              <h1>Subscribe to our newsletter</h1>
              <div>
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
                <div id="footer">
                  <p>© 2024 Your Next Store</p>
                  <p>Delightful commerce for everyone</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div id="details-product-right">
              <div id="details-Product">
                <h4>Products</h4>
                <a href="/Apparel">Apparel</a>
                <br />
                <a href="/Accessories">Accessories</a>
              </div>
              <div id="details-Product1">
                <h4>Support</h4>
                <a href="/Features">Features</a>
                <br />
                <a href="/Pricing">Pricing</a>
                <br />
                <a href="/ContactUs">Contact Us</a>
              </div>
            </div>
            {/* Footer Text */}
          </div>
        </div>
      </div>

    // </div>
  );
};

export default Contact;
