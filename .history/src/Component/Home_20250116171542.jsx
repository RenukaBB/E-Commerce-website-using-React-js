import React from "react";
import { Link, Outlet } from "react-router-dom";
import Main1 from "./Main/Main1";
import Cloud from "./Main/Cloud";




const Home = () => {
  return (
    <div>
      <div id="navbar">
        <nav id="navbar-items">
          <div id="navbar-title">
            <h1>Your Next Store</h1>
          </div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/Apparel">
            Apparel
          </Link>
          <Link className="link" to="/Accessories">
            Accessories
          </Link>
          <Link className="link" to="/digital">
            Digital
          </Link>
        </nav>
        <nav id="navbar-search">
          <input type="text" placeholder="Search For products.. " />
          <a href="#">
            <i className="fa fa-right-from-bracket"></i>
          </a>
        </nav>
        <nav id="navbar-icon">
          <i className="fa fa-list"></i>
        </nav>
      </div>

      {/* Main Content */}
      <div id="main1">
        <Main1 />
      </div>
      <div id="main2">
        <Cloud />
      </div>

      {/* Footer Section */}
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
        </div>
        {/* Footer Text */}
     
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
