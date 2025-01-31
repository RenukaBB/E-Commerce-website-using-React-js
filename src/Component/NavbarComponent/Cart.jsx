import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {

  const [state, setState] = useState(1);  
  const [total, setTotal] = useState(0); 

  const handleIncrease = () => {
    setState(state + 1); 
  };

  const handleDecrease = () => {
    if (state > 1) setState(state - 1); 
  };

  const handleTotal = (price) => {
    setTotal(price * state);  
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
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

      <br />
      <br />
      <br />
      <br />

      <div id="cart-item-navbar">
        <div id="cart-item-1">
          <h4>Item</h4>
        </div>
        <div id="cart-tem-all">
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>
      </div>

      <div id="cart-content">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <div id="incanddes">
                  <input type="button" value="-" onClick={() => { handleDecrease(); handleTotal(item.price); }} />
                  <h5>{state}</h5>
                  <input type="button" value="+" onClick={() => { handleIncrease(); handleTotal(item.price); }} />
                </div>
                <h1>Total: {total}</h1>
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
          <button className="continue-shopping-button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
