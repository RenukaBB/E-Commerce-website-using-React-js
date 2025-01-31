import React, { useState } from "react";
import { Link } from "react-router-dom";

const Apparel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const apparelItems = [
    { id: 1, name: "VINTAGE COIRO genuine", price: "300Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
    { id: 2, name: "MODERN BAG stylish", price: "500Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
    { id: 3, name: "CLASSIC COIRO pack", price: "400Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
    { id: 4, name: "VINTAGE COIRO premium", price: "600Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
    { id: 5, name: "LUXURY COIRO genuine", price: "800Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
    { id: 6, name: "BASIC BAG model", price: "200Rs", img: "https://cdn.pixabay.com/photo/2017/09/08/07/59/bag-2728000_1280.png" },
  ];

  const filteredItems = apparelItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
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
          <input
            type="text"
            placeholder="Search For products.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <a href="#">
            <i className="fa fa-right-from-bracket"></i>
          </a>
        </nav>
        <nav id="navbar-icon">
          <i className="fa fa-list"></i>
        </nav>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Main Content */}
      <main id="Apparel-items">
        <div id="Apparel-heading">
          <h3>Apparel</h3>
          <p>Category</p>
        </div>

        <div id="Apparel-detail">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="Apparel-items-box">
                <div className="Apparel-item-all">
                  <img src={item.img} alt={item.name} />
                  <div className="Apparel-name">
                    <h1>{item.name}</h1>
                    <p>Price: {item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      </main>

      <div id="Subscribe-group">
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
};

export default Apparel;
