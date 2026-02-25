import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setOrder(data);
    };
    fetchOrder();
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="order-container">
      <h2>Order Confirmed!</h2>
      <p className="success-message">Thank you for your purchase ❤️</p>

      <div className="order-details">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>

      <ul className="order-items">
        {order.items.map((item) => (
          <li key={item.product}>
            {item.name} x {item.quantity} {item.size && `(Size: ${item.size})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderConfirmation;