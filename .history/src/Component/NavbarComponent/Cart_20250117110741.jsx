import React from "react";
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

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + calculateItemTotal(item.price, item.quantity), 0);
  };

  return (
    <div>
      {/* Navbar */}
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

      {/* Cart Header */}
      <br /><br /><br /><br />
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

      {/* Cart Items */}
      <div id="cart-content">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ₹{item.price}</p>
                <div id="incanddes">
                  <input
                    type="button"
                    value="-"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  />
                  <h5>{item.quantity}</h5>
                  <input
                    type="button"
                    value="+"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  />
                </div>
                <h3>Total: ₹{calculateItemTotal(item.price, item.quantity)}</h3>
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
      </div>

      {/* Grand Total */}
      {cartItems && cartItems.length > 0 && (
        <div id="cart-summary">
          <h2>Grand Total: ₹{calculateCartTotal()}</h2>
          <Link to="/Apparel">
            <button className="continue-shopping-button">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
