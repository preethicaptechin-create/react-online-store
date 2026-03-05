import axios from "axios";

// const API_URL = "http://localhost:5000/api/orders";
const API_URL = `${import.meta.env.VITE_API_URL}/api/orders`;

// GET all orders (admin only)
export const getOrders = async (token) => {
  const res = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

// UPDATE order status (admin only)
export const updateOrderStatus = async (id, status, token) => {
  const res = await axios.put(`${API_URL}/${id}/status`, { status }, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};