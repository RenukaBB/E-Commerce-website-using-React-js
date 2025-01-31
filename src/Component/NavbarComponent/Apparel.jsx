import React, { useState } from "react";
import { Link } from "react-router-dom";

const Apparel = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "VINTAGE COIRO genuine", price: "400Rs", img: "https://m.media-amazon.com/images/I/51qkAEBj-OL._AC_UY1100_.jpg" },
    { id: 2, name: "Classic T-Shirt", price: "350Rs", img: "https://www.beyoung.in/blog/wp-content/uploads/2018/09/general-1.png" },
    { id: 3, name: "Elegant Dress", price: "330Rs", img: "https://media.shopkund.com/media/catalog/product/cache/9b8fb9a78b48ba20857a65111a93b65e/a/c/acu6404-1-maroon-faux-georgette-embroidered-girls-dress-with-dupatta-gl0072.jpg" },
    { id: 4, name: "Printed Chiffon Dress", price: "300Rs", img: "https://www.jiomart.com/images/product/original/rv0qy4cinz/fabflee-women-red-printed-chiffon-a-line-dress-red-product-images-rv0qy4cinz-4-202209202131.jpg?im=Resize=(500,630)" },
    { id: 5, name: "Golden Silk Bridal Saree", price: "500Rs", img: "https://5.imimg.com/data5/MM/TY/WF/SELLER-93705549/golden-silk-bridal-saree.jpg" },
    { id: 6, name: "Modern Shoes", price: "400Rs", img: "https://uathayam.in/cdn/shop/files/LP_5179.jpg?v=1703487105&width=1080" },
    { id: 7, name: "Women Casual Flats", price: "300Rs", img: "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/7/b/6/9-sporty-boots-men-s-9-englewood-white-grey-original-imah47nyrgfwbenz.jpeg?q=20&crop=false" },
    { id: 8, name: "Women Casual Flats", price: "700Rs", img: "https://5.imimg.com/data5/SELLER/Default/2023/3/292961893/MD/WL/FO/182365761/women-casual-shallow-mouth-shoe-pointed-toe-shoe-working-flat-shoes.jpg" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      if (!cartItems.find((item) => item.id === selectedProduct.id)) {
        setCartItems([...cartItems, selectedProduct]);
        alert(`${selectedProduct.name} added to the cart!`);
      } else {
        alert(`${selectedProduct.name} is already in the cart.`);
      }
    }
  };

  return (
    <div>
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
        <nav id="navbar-search">
          <input
            type="text"
            placeholder="Search For products.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </nav>
      </div>

      <br />
      <br />
      <br />
      <br />

      <main id="Apparel-items">
        <div id="Apparel-heading">
          <h3>Apparel</h3>
          <p>Category</p>
        </div>

        <div id="Apparel-detail">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="Apparel-items-box">
                <div className="Apparel-item-all">
                  <img src={product.img} alt={product.name} />
                  <div className="Apparel-name">
                    <h1>{product.name}</h1>
                    <p>Price: {product.price}</p>
                    <button
                      className="buy-now-button"
                      onClick={() => handleBuyNow(product.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Apparel;
