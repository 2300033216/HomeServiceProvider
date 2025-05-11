import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    );
  };

  const handleOrder = () => {
    const order = {
      id: Date.now(),
      status: "Preparing",
      estimatedTime: "30 mins",
      address: "123, Food Street, MyCity",
      items: cartItems,
      paymentMode: selectedPayment,
    };
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.removeItem("cart");
  };

  return (
    <div className="cart-layout">
      <div className="cart-left">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div className="cart-card" key={index}>
                {item.image && (
                  <img src={item.image} alt={item.name} className="cart-img" />
                )}
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="cart-right">
        <h3>Select Payment Method</h3>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              value="UPI"
              checked={selectedPayment === "UPI"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            UPI (Google Pay, PhonePe)
          </label>
          <label>
            <input
              type="radio"
              value="Wallet"
              checked={selectedPayment === "Wallet"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            Wallet (Paytm, Amazon Pay)
          </label>
          <label>
            <input
              type="radio"
              value="Card"
              checked={selectedPayment === "Card"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            Debit/Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="COD"
              checked={selectedPayment === "COD"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        <h3>Total: ₹{getTotalPrice()}</h3>

        <div className="checkout-buttons">
          <Link to="/payment" onClick={handleOrder}>
            <button className="btn-green">Proceed to QR Payment</button>
          </Link>
          <Link to="/success" onClick={handleOrder}>
            <button className="btn-orange">Direct Payment Success</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
