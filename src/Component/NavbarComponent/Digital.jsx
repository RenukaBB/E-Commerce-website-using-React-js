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
              <Link className="link" to="/home">
                Home
              </Link>
              <Link className="link" to="/Apparel">
                Apparel
              </Link>
              <Link className="link" to="/digital">
                Digital
              </Link>
              <Link className="link" to="/cart">Cart</Link>
              <Link className="link" to="/contact">
                          Contact
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
        <br /><br /><br /><br />
        <div id='Digital-title'>
        <h2>Digital</h2>
        <p>Category</p>
        <div id='Digital-item'> 
          <div className='Digital-item-all'>
            <img src="https://demo.yournextstore.com/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfSm9uYVhyMnVDbUVJYXp3OFFTUVF4Ukh4009PW1G2YA&w=3840&q=75" alt="" height={245}/>
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>

          <div className='Digital-item-all'>
            <img src="https://media.istockphoto.com/id/1472421626/photo/3d-rendering-of-wireless-headphones-on-blue-background.jpg?s=612x612&w=0&k=20&c=jYTmh61zaf5wSlqs_vKDsTm_G0JU-K2SbzGF1LimjSo=" alt="" />
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>

          <div className='Digital-item-all'>
            <img src="https://media.istockphoto.com/id/2150635481/photo/hanging-bluetooth-speaker-on-the-pink-surface.jpg?s=612x612&w=0&k=20&c=2DRmyyYV4PZsUdimkNTZ1d-T8EuY26hW3-rBNeIEhe4=" alt="" />
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>

          <div className='Digital-item-all'>
            <img src="https://media.istockphoto.com/id/175430525/photo/handheld-game-console-isolated-on-white.jpg?s=612x612&w=0&k=20&c=s13TaPt7CKbBxD1rFRvNnga0orOZ0cnq2cUjJmJ6naY=" alt="" />
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>
          <div className='Digital-item-all'>
            <img src="https://media.istockphoto.com/id/1308379004/photo/high-angle-view-of-beard-trimmer-with-brush-with-negative-space-modern-hair-trimmer-isolated.jpg?s=612x612&w=0&k=20&c=7hKywm3xOPuleDMAdMkMRT_UnMb2gHaG6wKTmjAU1Dw=" alt="" />
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>
          <div className='Digital-item-all'>
            <img src="https://media.istockphoto.com/id/915655730/photo/black-modern-tv-with-a-picture-of-the-landscape.jpg?s=612x612&w=0&k=20&c=d7DBd7476sfPoSyB3TcpDKAxSHodjWIvS3sSNz8RDAQ=" alt="" />
            <div className='Digital-text'>
              <h3>Echoes of Tomorrow</h3>
              <p>Price : 210</p>
            </div>
          </div>



        </div>
        </div>

        




          <div id="Subscribe-group1">
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






        </div>
      );
    
}

export default Digital