import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("adminToken");

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status
  const handleStatusChange = async (orderId, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${orderId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchOrders(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Admin Orders Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>OrderId</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o._id}</td>
              <td>{o.firstName} {o.lastName}</td>
              <td>₹{o.total}</td>
              <td>{o.status}</td>
              <td>
                <select
                  value={o.status}
                  onChange={(e) => handleStatusChange(o._id, e.target.value)}
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;