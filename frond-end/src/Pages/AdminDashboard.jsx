import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("adminToken"); // JWT token

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Create product
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      if (file) formData.append("image", file);

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setName("");
      setPrice("");
      setFile(null);
      fetchProducts(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Create Product</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Create</button>
      </form>

      <h2>Products List</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;