import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
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
      </div>

      <div id="cart-content">
        <h1>Your Cart</h1>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
               
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty. Start shopping now!</p>
        )}
        <Link to="/Apparel">
          <button className="continue-shopping-button">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
