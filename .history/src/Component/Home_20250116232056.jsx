import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Main1 from './Main/Main1';
import Cloud from './Main/Cloud';

const Home = () => {
  return (
    <div>
      <div id="navbar">
        <nav id="navbar-items">
          <div id="navbar-title">
            <h1>Your Next Store</h1>
          </div>
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/apparel">Apparel</Link>
          <Link className="link" to="/digital">Digital</Link>
          <Link className="link" to="/cart">Cart</Link>
          <Link className="link" to="/contact">Contact</Link>
        </nav>
        <nav id="navbar-search">
          <input type="text" placeholder="Search For products.. " />
          <Link to="/loginx">
            <i className="fa fa-right-from-bracket"></i>
            </Link>
        </nav>
        <nav id="navbar-icon">
          <i className="fa fa-list"></i>
        </nav>
      </div>

      <div id="main1">
        <Main1 />
      </div>
      <div id="main2">
        <Cloud />
      </div>

      <div id="Subscribe">
        <div id="border-down">
          <div id="details-product-left">
            <h1>Subscribe to our newsletter</h1>
            <div>
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          <div id="details-product-right">
            <div id="details-Product">
              <h4>Products</h4>
              <a href="/apparel">Apparel</a>
              <br />
              <a href="/accessories">Accessories</a>
            </div>
            <div id="details-Product1">
              <h4>Support</h4>
              <a href="/features">Features</a>
              <br />
              <a href="/pricing">Pricing</a>
              <br />
              <a href="/contactus">Contact Us</a>
            </div>
          </div>
        </div>
        <div id="footer">
          <p>© 2024 Your Next Store</p>
          <p>Delightful commerce for everyone</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
