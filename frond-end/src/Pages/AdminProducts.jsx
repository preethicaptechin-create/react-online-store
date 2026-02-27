import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProducts({ token }) {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [file, setFile] = useState(null);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res.data.data || res.data); // depending on API response
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [token]);

  // Create product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);
      if (file) formData.append("image", file);

      const res = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts((prev) => [res.data.data || res.data, ...prev]);
      setForm({ name: "", price: "", category: "", description: "" });
      setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Admin Products</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Add Product</button>
      </form>

      <hr />

      {products.map((product) => (
        <div key={product._id}>
          <p>
            {product.name} - ₹{product.price}
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;