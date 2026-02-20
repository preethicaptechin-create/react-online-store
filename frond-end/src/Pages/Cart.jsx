


import React, { useEffect, useState } from "react";
import "./Cart.css";

import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    try {
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Failed to parse cart:", err);
      return [];
    }
  });

  // ✅ Save cart + notify header
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cart]);

  // quantity controls
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(prev =>
      prev.filter(item => item.id !== id)
    );
  };

  // totals
  const totalItems = cart.reduce(
    (sum, item) => sum + (item.qty || 0),
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + (item.price || 0) * (item.qty || 0),
    0
  );

  return (

    <div className="cart-page">

      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">

        {/* ITEMS */}
        <div className="cart-items">

          {cart.length === 0 ? (

            <div className="empty-cart">

              <FaShoppingCart className="empty-icon" />

              <h2>Your cart is empty</h2>

              <p>Add something you love ❤️</p>

              <button
                className="shop-btn"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            cart.map(item => (

              <div key={item.id} className="cart-item">

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>
                  <p className="price">₹ {item.price}</p>

                  <div className="qty-controls">

                    <button onClick={() => decreaseQty(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        {/* SUMMARY — show only when cart has items */}
        {cart.length > 0 && (

          <div className="cart-summary">

            <h2>Total</h2>

            <p>Total Items: {totalItems}</p>

            <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
