// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });
//   const [file, setFile] = useState(null);

//   // Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts(res.data.data || res.data); // depending on API response
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   // Create product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setProducts((prev) => [res.data.data || res.data, ...prev]);
//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Products</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button type="submit">Add Product</button>
//       </form>

//       <hr />

//       {products.map((product) => (
//         <div key={product._id}>
//           <p>
//             {product.name} - ₹{product.price}
//             <button onClick={() => deleteProduct(product._id)}>Delete</button>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminProducts;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminProducts.css"; // Import the CSS

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", category: "", description: "" });
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts(res.data.data || res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setProducts((prev) => [res.data.data || res.data, ...prev]);
//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products</h2>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
//         <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
//         <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
//         <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button type="submit">Add Product</button>
//       </form>

//       <hr />

//       <div className="product-list">
//         {products.map((product) => (
//           <div className="product-item" key={product._id}>
//             <p>
//               {product.name} - ₹{product.price}
//             </p>
//             <button onClick={() => deleteProduct(product._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminProducts;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminProducts.css";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch products on mount / token change
//   useEffect(() => {
//     if (!token) {
//       setError("No token found. Please login.");
//       return;
//     }

//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get("http://localhost:5000/api/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("GET products response:", res.data); // ← debug

//         const productList =
//           res.data?.data ||
//           res.data?.products ||
//           (Array.isArray(res.data) ? res.data : []);

//         setProducts(productList);
//       } catch (err) {
//         console.error("Fetch failed:", err);
//         setError(err.response?.data?.message || "Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   // Add product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!token) {
//       alert("Admin login");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/products",
//         formData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       console.log("POST full response:", res);           // ← very important
//       console.log("POST res.data:", res.data);           // ← இதை பாருங்க!

//       // Response handling – backend எப்படி reply பண்றதுக்கு match ஆகுற மாதிரி
//       let newProductList = [];

//       if (res.data?.success === true) {
//         // Case 1: full array inside data
//         if (Array.isArray(res.data.data)) {
//           newProductList = res.data.data;
//         }
//         // Case 2: full array inside products
//         else if (Array.isArray(res.data.products)) {
//           newProductList = res.data.products;
//         }
//         // Case 3: response itself is array
//         else if (Array.isArray(res.data)) {
//           newProductList = res.data;
//         }
//       }

//       if (newProductList.length > 0) {
//         // Server full updated list கொடுத்திருந்தா → அதை set பண்ணு (safest)
//         setProducts(newProductList);
//       } else {
//         // Server single new product மட்டும் கொடுத்திருந்தா fallback
//         const singleNewProduct = res.data?.data || res.data?.product || res.data;
//         if (singleNewProduct?._id) {
//           setProducts((prev) => [singleNewProduct, ...prev]);
//         } else {
//           console.warn("Could not find new product in response");
//         }
//       }

//       // Reset form
//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);

//       alert("Product successfully added!");
//     } catch (err) {
//       console.error("Add product error:", err);
//       const errMsg =
//         err.response?.data?.message ||
//         err.message ||
//         "Something went wrong – check console";
//       setError(errMsg);
//       alert(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return;
//     if (!window.confirm("Really delete this product?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setProducts((prev) => prev.filter((p) => p._id !== id));
//       alert("Product deleted");
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert(err.response?.data?.message || "Delete failed");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products Management</h2>

//       {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name *"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           disabled={loading}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹) *"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//           min="1"
//           disabled={loading}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           disabled={loading}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           rows={3}
//           disabled={loading}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files?.[0] || null)}
//           disabled={loading}
//         />
//         <button type="submit" disabled={loading || !form.name || !form.price}>
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>

//       <hr />

//       {loading && <p className="loading">Loading...</p>}

//       <div className="product-list">
//         {products.length === 0 ? (
//           <p>No products available yet.</p>
//         ) : (
//           products.map((product) => (
//             <div className="product-item" key={product._id}>
//               <div className="product-info">
//                 {product.image && (
//                   <img
//                     src={`http://localhost:5000/${product.image}`}
//                     alt={product.name}
//                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                     onError={(e) => { e.target.src = "/placeholder.jpg"; }} // fallback
//                   />
//                 )}
//                 <div>
//                   <strong>{product.name || "Unnamed"}</strong>
//                   <br />
//                   ₹{product.price || 0}
//                   {product.category && ` • ${product.category}`}
//                 </div>
//               </div>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteProduct(product._id)}
//                 disabled={loading}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminProducts;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminProducts.css";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch products on mount / token change
//   useEffect(() => {
//     if (!token) {
//       setError("No token found. Please login.");
//       return;
//     }

//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get("http://localhost:5000/api/products", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const productList =
//           res.data?.data ||
//           res.data?.products ||
//           (Array.isArray(res.data) ? res.data : []);

//         setProducts(productList);
//       } catch (err) {
//         console.error("Fetch failed:", err);
//         setError(err.response?.data?.message || "Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   // Add product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) {
//       alert("Admin login required");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post("http://localhost:5000/api/products", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Update product list after add
//       const newProduct =
//         res.data?.data || res.data?.product || res.data;

//       if (newProduct?._id) {
//         setProducts((prev) => [newProduct, ...prev]);
//       }

//       // Reset form
//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);

//       alert("Product successfully added!");
//     } catch (err) {
//       console.error("Add product error:", err);
//       const errMsg =
//         err.response?.data?.message || err.message || "Something went wrong";
//       setError(errMsg);
//       alert(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return;
//     if (!window.confirm("Really delete this product?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setProducts((prev) => prev.filter((p) => p._id !== id));
//       alert("Product deleted");
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert(err.response?.data?.message || "Delete failed");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products Management</h2>

//       {error && <div className="error-message">{error}</div>}

//       {/* Add Product Form */}
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <input
//           type="text"
//           placeholder="Product Name *"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           disabled={loading}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹) *"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//           min="1"
//           disabled={loading}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           disabled={loading}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           rows={3}
//           disabled={loading}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files?.[0] || null)}
//           disabled={loading}
//         />
//         <button type="submit" disabled={loading || !form.name || !form.price}>
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>

//       <hr />

//       {/* Products List */}
//       {loading && <p>Loading...</p>}
//       <div className="product-list">
//         {products.length === 0 ? (
//           <p>No products available.</p>
//         ) : (
//           products.map((product) => (
//             <div className="product-item" key={product._id}>
//               {product.image && (
//                 <img
//                   src={`http://localhost:5000/${product.image}`}
//                   alt={product.name}
//                   onError={(e) => (e.target.src = "/placeholder.jpg")}
//                 />
//               )}
//               <div className="product-details">
//                 <strong>{product.name}</strong>
//                 <p>₹{product.price}</p>
//                 {product.category && <p>Category: {product.category}</p>}
//                 {product.description && <p>{product.description}</p>}
//               </div>
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteProduct(product._id)}
//                 disabled={loading}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminProducts;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminProducts.css";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const BASE_URL = "http://localhost:5000/api";

//   // Fetch products on mount or token change
//   useEffect(() => {
//     if (!token) {
//       setError("No token found. Please login.");
//       return;
//     }

//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const res = await axios.get(`${BASE_URL}/products`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const productList =
//           res.data?.data || res.data?.products || (Array.isArray(res.data) ? res.data : []);
//         setProducts(productList);
//       } catch (err) {
//         console.error("Fetch products error:", err);
//         setError(err.response?.data?.message || "Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   // Add product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Admin login required");

//     setLoading(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post(`${BASE_URL}/products`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const newProduct = res.data?.data || res.data?.product || res.data;
//       if (newProduct?._id) {
//         setProducts((prev) => [newProduct, ...prev]);
//       }

//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);
//       alert("Product added successfully!");
//     } catch (err) {
//       console.error("Add product error:", err);
//       const errMsg = err.response?.data?.message || err.message || "Something went wrong";
//       setError(errMsg);
//       alert(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return;
//     if (!window.confirm("Delete this product?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p._id !== id));
//       alert("Product deleted");
//     } catch (err) {
//       console.error("Delete product error:", err);
//       alert(err.response?.data?.message || "Delete failed");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products</h2>

//       {error && <p className="error-message">{error}</p>}

//       {/* Add Product Form */}
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <input
//           type="text"
//           placeholder="Product Name *"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           disabled={loading}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹) *"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//           min="1"
//           disabled={loading}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           disabled={loading}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           rows={3}
//           disabled={loading}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files?.[0] || null)}
//           disabled={loading}
//         />
//         <button type="submit" disabled={loading || !form.name || !form.price}>
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>

//       <hr />

//       {/* Products List */}
//       {loading && <p>Loading products...</p>}
//       {products.length === 0 && !loading && <p>No products available.</p>}

//       <div className="product-list">
//         {products.map((product) => (
//           <div className="product-item" key={product._id}>
//             {product.image && (
//               <img
//                 src={`http://localhost:5000/${product.image}`}
//                 alt={product.name}
//                 onError={(e) => (e.target.src = "/placeholder.jpg")}
//               />
//             )}
//             <div className="product-details">
//               <strong>{product.name}</strong>
//               <p>₹{product.price}</p>
//               {product.category && <p>Category: {product.category}</p>}
//               {product.description && <p>{product.description}</p>}
//             </div>
//             <button
//               className="delete-btn"
//               onClick={() => deleteProduct(product._id)}
//               disabled={loading}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminProducts;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import UploadGallery from "../Components/UploadGallery"; // Make sure path is correct
// import "./AdminProducts.css";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", category: "", description: "" });
//   const [file, setFile] = useState(null);
//   const [loadingAdd, setLoadingAdd] = useState(false);
//   const [loadingProducts, setLoadingProducts] = useState(false);
//   const [error, setError] = useState(null);

//   const BASE_URL = "http://localhost:5000/api";

//   // Fetch products
//   useEffect(() => {
//     if (!token) {
//       setError("No token found. Please login.");
//       return;
//     }

//     const fetchProducts = async () => {
//       setLoadingProducts(true);
//       setError(null);
//       try {
//         const res = await axios.get(`${BASE_URL}/products`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const productList =
//           res.data?.data || res.data?.products || (Array.isArray(res.data) ? res.data : []);
//         setProducts(productList);
//       } catch (err) {
//         console.error(err);
//         setError(err.response?.data?.message || "Failed to load products");
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   // Add product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!token) return alert("Admin login required");

//     setLoadingAdd(true);
//     setError(null);

//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       const res = await axios.post(`${BASE_URL}/products`, formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const newProduct = res.data?.data || res.data?.product || res.data;
//       if (newProduct?._id) setProducts((prev) => [newProduct, ...prev]);

//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);
//       alert("Product added successfully!");
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || err.message || "Something went wrong");
//       alert(error);
//     } finally {
//       setLoadingAdd(false);
//     }
//   };

//   // Delete product
//   const deleteProduct = async (id) => {
//     if (!token) return;
//     if (!window.confirm("Delete this product?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p._id !== id));
//       alert("Product deleted");
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Delete failed");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products</h2>

//       {error && <p className="error-message">{error}</p>}

//       {/* Add Product Form */}
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <input
//           type="text"
//           placeholder="Product Name *"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//           disabled={loadingAdd}
//         />
//         <input
//           type="number"
//           placeholder="Price (₹) *"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//           min="1"
//           disabled={loadingAdd}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           disabled={loadingAdd}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           rows={3}
//           disabled={loadingAdd}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files?.[0] || null)}
//           disabled={loadingAdd}
//         />
//         <button type="submit" disabled={loadingAdd || !form.name || !form.price}>
//           {loadingAdd ? "Adding..." : "Add Product"}
//         </button>
//       </form>

//       <hr />

//       {/* UploadGallery Section */}
//       <UploadGallery />

//       <hr />

//       {/* Products List */}
//       {loadingProducts && <p>Loading products...</p>}
//       {!loadingProducts && products.length === 0 && <p>No products available.</p>}

//       <div className="product-list">
//         {products.map((product) => (
//           <div className="product-item" key={product._id}>
//             {product.image ? (
//               <img
//                 src={
//                   product.image.startsWith("http")
//                     ? product.image
//                     : `http://localhost:5000/uploads/${product.image}`
//                 }
//                 alt={product.name}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23e0e0e0' width='80' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='8'%3ENo image%3C/text%3E%3C/svg%3E";
//                 }}
//               />
//             ) : (
//               <img
//                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23e0e0e0' width='80' height='80'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='8'%3ENo image%3C/text%3E%3C/svg%3E"
//                 alt={product.name}
//               />
//             )}
//             <div className="product-details">
//               <strong>{product.name}</strong>
//               <p>₹{product.price}</p>
//               {product.category && <p>Category: {product.category}</p>}
//               {product.description && <p>{product.description}</p>}
//             </div>
//             <button className="delete-btn" onClick={() => deleteProduct(product._id)} disabled={loadingAdd}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminProducts;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./AdminProducts.css";

// function AdminProducts({ token }) {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     description: "",
//   });
//   const [file, setFile] = useState(null);
//   const [editId, setEditId] = useState(null);
//   const [loadingAdd, setLoadingAdd] = useState(false);
//   const [loadingProducts, setLoadingProducts] = useState(false);
//   const [error, setError] = useState(null);

//   const BASE_URL = "http://localhost:5000/api";

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoadingProducts(true);
//       try {
//         const res = await axios.get(`${BASE_URL}/products`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts(res.data?.data || []);
//       } catch {
//         setError("Failed to load products");
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   // Add / Update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoadingAdd(true);

//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("category", form.category);
//       formData.append("description", form.description);
//       if (file) formData.append("image", file);

//       if (editId) {
//         // UPDATE
//         const res = await axios.put(
//           `${BASE_URL}/products/${editId}`,
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         setProducts((prev) =>
//           prev.map((p) => (p._id === editId ? res.data.data : p))
//         );
//         setEditId(null);
//       } else {
//         // ADD
//         const res = await axios.post(`${BASE_URL}/products`, formData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((prev) => [res.data.data, ...prev]);
//       }

//       setForm({ name: "", price: "", category: "", description: "" });
//       setFile(null);
//     } catch {
//       alert("Save failed");
//     } finally {
//       setLoadingAdd(false);
//     }
//   };

//   // Edit click
//   const editProduct = (product) => {
//     setEditId(product._id);
//     setForm({
//       name: product.name,
//       price: product.price,
//       category: product.category || "",
//       description: product.description || "",
//     });
//     setFile(null);
//   };

//   // Delete
//   const deleteProduct = async (id) => {
//     if (!window.confirm("Delete this product?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p._id !== id));
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="admin-products">
//       <h2>Admin Products</h2>

//       {error && <p className="error-message">{error}</p>}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="add-product-form">
//         <input
//           type="text"
//           placeholder="Product Name *"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price (₹) *"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button type="submit">
//           {editId ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <hr />

//       {/* Table */}
//       {loadingProducts ? (
//         <p>Loading products...</p>
//       ) : (
//         <table className="product-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Category</th>
//               <th>Image</th>
//               <th>Amount</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((p) => (
//               <tr key={p._id}>
//                 <td>{p.name}</td>
//                 <td>{p.category || "-"}</td>
//                 <td>
//                   <img
//                     src={`http://localhost:5000/uploads/${p.image}`}
//                     width="60"
//                     alt={p.name}
//                   />
//                 </td>
//                 <td>₹{p.price}</td>
//                 <td>
//                   <button onClick={() => editProduct(p)}>Edit</button>
//                   <button onClick={() => deleteProduct(p._id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AdminProducts;






import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminProducts.css";

// ✅ Import config
import { BASE_URL, CURRENCY } from "../utils/config";

function AdminProducts({ token }) {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [error, setError] = useState(null);

  // =========================
  // Fetch products
  // =========================
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const res = await axios.get(`${BASE_URL}/api/products`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res.data?.data || []);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [token]);

  // =========================
  // Add / Update product
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingAdd(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      if (file) formData.append("image", file);

      if (editId) {
        const res = await axios.put(
          `${BASE_URL}/api/products/${editId}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setProducts((prev) =>
          prev.map((p) => (p._id === editId ? res.data.data : p))
        );
        setEditId(null);
      } else {
        const res = await axios.post(
          `${BASE_URL}/api/products`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProducts((prev) => [res.data.data, ...prev]);
      }

      setForm({ name: "", price: "", category: "", description: "" });
      setFile(null);
    } catch {
      alert("Save failed");
    } finally {
      setLoadingAdd(false);
    }
  };

  // =========================
  // Edit product
  // =========================
  const editProduct = (product) => {
    setEditId(product._id);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category || "",
      description: product.description || "",
    });
    setFile(null);
  };

  // =========================
  // Delete product
  // =========================
  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="admin-products">
      <h2>Admin Products</h2>

      {error && <p className="error-message">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Product Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder={`Price (${CURRENCY}) *`}
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
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" disabled={loadingAdd}>
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <hr />

      {/* Table */}
      {loadingProducts ? (
        <p>Loading products...</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Image</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.category || "-"}</td>
                <td>
                  <img
                    src={
                      p.image
                        ? `${BASE_URL}/uploads/${p.image}`
                        : ""
                    }
                    width="60"
                    alt={p.name}
                  />
                </td>
                <td>
                  {CURRENCY}
                  {p.price}
                </td>
                <td>
                  <button onClick={() => editProduct(p)}>Edit</button>
                  <button onClick={() => deleteProduct(p._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminProducts;