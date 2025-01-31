import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Digital = () => {
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
              <a href="">
                <i className="fa fa-right-from-bracket"></i>
              </a>{" "}
              {/* Correct Font Awesome icon */}
            </nav>
            <nav id="navbar-icon">
              <i className="fa fa-list"></i> {/* Menu icon */}
            </nav>
          </div>
        </div>
      );
    
}

export default Digital