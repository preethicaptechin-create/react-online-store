// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const token = localStorage.getItem("adminToken");

//   // Fetch all orders
//   const fetchOrders = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/admin/orders/${orderId}/status`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setOrders(res.data.data || res.data); // handle API response
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Update order status
//   const handleStatusChange = async (orderId, status) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/orders/${orderId}/status`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchOrders(); // Refresh list after update
//     } catch (err) {
//       console.error("Error updating status:", err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Orders Dashboard</h1>
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           marginTop: "20px",
//         }}
//       >
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order ID</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>User</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
//             <th style={{ border: "1px solid #ddd", padding: "8px" }}>Update Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.length === 0 ? (
//             <tr>
//               <td colSpan="5" style={{ textAlign: "center", padding: "10px" }}>
//                 No orders found.
//               </td>
//             </tr>
//           ) : (
//             orders.map((o) => (
//               <tr key={o._id}>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{o._id}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   {o.firstName} {o.lastName}
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{o.total}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>{o.status}</td>
//                 <td style={{ border: "1px solid #ddd", padding: "8px" }}>
//                   <select
//                     value={o.status}
//                     onChange={(e) => handleStatusChange(o._id, e.target.value)}
//                   >
//                     <option value="Processing">Processing</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </select>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrders;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("adminToken");

//   // Fetch all orders (GET request)
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await axios.get("http://localhost:5000/api/admin/order", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Assuming backend returns { success: true, data: [...] }
//       setOrders(response.data.data || response.data || []);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       setError(
//         err.response?.data?.message ||
//         "Failed to load orders. Please check if you're logged in as admin."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     } else {
//       setError("Admin token not found. Please login again.");
//       setLoading(false);
//     }
//   }, [token]);

//   // Update single order status
//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/admin/orders/${orderId}/status`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       // Refresh the list after successful update
//       fetchOrders();
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert(
//         err.response?.data?.message ||
//         "Failed to update status. Try again."
//       );
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Orders Dashboard</h1>

//       {loading && <p>Loading orders...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {!loading && !error && (
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             marginTop: "20px",
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Order ID</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>User</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Total</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 ? (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order._id}>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order._id}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order.firstName} {order.lastName}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     ₹{order.total?.toFixed(2) || "—"}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order.status}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     <select
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                       style={{ padding: "6px" }}
//                     >
//                       <option value="Processing">Processing</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                       <option value="Cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrders;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("adminToken");

//   // Fetch all orders (GET request)
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await axios.get("http://localhost:5000/api/admin/order", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Assuming backend returns { success: true, data: [...] }
//       setOrders(response.data.data || response.data || []);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       setError(
//         err.response?.data?.message ||
//         "Failed to load orders. Please check if you're logged in as admin."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrders();
//     } else {
//       setError("Admin token not found. Please login again.");
//       setLoading(false);
//     }
//   }, [token]);

//   // Update single order status
//   const handleStatusChange = async (orderId, newStatus) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/admin/order/${orderId}/status`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Refresh the list after successful update
//       fetchOrders();
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert(
//         err.response?.data?.message ||
//         "Failed to update status. Try again."
//       );
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Orders Dashboard</h1>

//       {loading && <p>Loading orders...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {!loading && !error && (
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             marginTop: "20px",
//           }}
//         >
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Order ID</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>User</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Total</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 ? (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order._id}>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order._id}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order.firstName} {order.lastName}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     ₹{order.total?.toFixed(2) || "—"}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order.status}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     <select
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                       style={{ padding: "6px" }}
//                     >
//                       <option value="Processing">Processing</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                       <option value="Cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrder;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get admin token from localStorage
//   const token = localStorage.getItem("adminToken");

//   // Fetch all orders
//   const fetchOrders = async () => {
//     if (!token) {
//       setError("Admin token not found. Please login again.");
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

//       const response = await axios.get("http://localhost:5000/api/admin/orders", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setOrders(response.data.data || response.data || []);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       setError(
//         err.response?.data?.message ||
//           "Failed to load orders. Please check if you're logged in as admin."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [token]);

//   // Update single order status
//   const handleStatusChange = async (orderId, newStatus) => {
//     if (!token) {
//       alert("Admin token missing. Please login.");
//       return;
//     }

//     try {
//       await axios.put(
//         `http://localhost:5000/api/admin/orders/${orderId}/status`, // must match backend
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       // Update state locally instead of full refetch
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === orderId ? { ...order, status: newStatus } : order
//         )
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert(err.response?.data?.message || "Failed to update status. Try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Orders Dashboard</h1>

//       {loading && <p>Loading orders...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {!loading && !error && (
//         <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Order ID</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>User</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Total</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
//               <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.length === 0 ? (
//               <tr>
//                 <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
//                   No orders found.
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order) => (
//                 <tr key={order._id}>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>{order._id}</td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     {order.firstName} {order.lastName}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     ₹{order.total?.toFixed(2) || "—"}
//                   </td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>{order.status}</td>
//                   <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                     <select
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                       style={{ padding: "6px" }}
//                     >
//                       <option value="Processing">Processing</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Delivered">Delivered</option>
//                       <option value="Cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminOrder;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // for redirect on auth fail

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   // Use consistent token key - change to "token" if that's what you use everywhere
//   const token = localStorage.getItem("adminToken") || localStorage.getItem("token");

//   const fetchOrders = async () => {
//     if (!token) {
//       setError("Admin login required. Redirecting to login...");
//       setTimeout(() => navigate("/admin-login"), 2000);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get("http://localhost:5000/api/admin/orders", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Handle different possible response shapes
//       const orderData = response.data.data || response.data.orders || response.data || [];
//       setOrders(orderData);
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);

//       let errMsg = "Failed to load orders.";

//       if (err.response) {
//         if (err.response.status === 401) {
//           errMsg = "Session expired or unauthorized. Please login again.";
//           localStorage.removeItem("adminToken");
//           localStorage.removeItem("token");
//           setTimeout(() => navigate("/admin-login"), 2000);
//         } else {
//           errMsg = err.response.data?.message || errMsg;
//         }
//       }

//       setError(errMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [token, navigate]);

//   const handleStatusChange = async (orderId, newStatus) => {
//     if (!token) {
//       alert("Admin authentication required.");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/admin/orders/${orderId}/status`,
//         { status: newStatus },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // If backend returns the updated order, use it
//       const updatedOrder = response.data?.data || response.data;

//       if (updatedOrder && updatedOrder._id) {
//         setOrders((prev) =>
//           prev.map((o) => (o._id === orderId ? updatedOrder : o))
//         );
//       } else {
//         // Fallback: optimistic update
//         setOrders((prev) =>
//           prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o))
//         );
//       }

//       alert("Order status updated successfully!");
//     } catch (err) {
//       console.error("Status update failed:", err);
//       alert(
//         err.response?.data?.message ||
//           "Failed to update order status. Please try again."
//       );
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       <h1>Admin Orders Management</h1>

//       {loading && (
//         <div style={{ textAlign: "center", padding: "40px" }}>
//           <p>Loading orders...</p>
//         </div>
//       )}

//       {error && (
//         <div style={{ color: "red", marginBottom: "20px", fontWeight: "bold" }}>
//           {error}
//         </div>
//       )}

//       {!loading && !error && (
//         <>
//           {orders.length === 0 ? (
//             <p style={{ textAlign: "center", padding: "40px" }}>
//               No orders found in the system.
//             </p>
//           ) : (
//             <table
//               style={{
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 marginTop: "20px",
//                 background: "white",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               }}
//             >
//               <thead>
//                 <tr style={{ background: "#f8f9fa" }}>
//                   <th style={{ border: "1px solid #ddd", padding: "12px" }}>Order ID</th>
//                   <th style={{ border: "1px solid #ddd", padding: "12px" }}>Customer</th>
//                   <th style={{ border: "1px solid #ddd", padding: "12px" }}>Total</th>
//                   <th style={{ border: "1px solid #ddd", padding: "12px" }}>Status</th>
//                   <th style={{ border: "1px solid #ddd", padding: "12px" }}>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order._id}>
//                     <td style={{ border: "1px solid #ddd", padding: "12px" }}>
//                       {order._id.slice(-8).toUpperCase()}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "12px" }}>
//                       {order.user?.name || 
//                        `${order.firstName || ""} ${order.lastName || ""}`.trim() || 
//                        "Guest"}
//                       {order.user?.email && <br />}
//                       {order.user?.email && <small>{order.user.email}</small>}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "12px" }}>
//                       ₹{(order.totalAmount || order.total || 0).toFixed(2)}
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "12px" }}>
//                       <span
//                         style={{
//                           padding: "6px 12px",
//                           borderRadius: "20px",
//                           background:
//                             order.status === "Delivered" ? "#d4edda" :
//                             order.status === "Cancelled" ? "#f8d7da" :
//                             order.status === "Shipped" ? "#fff3cd" : "#e2e3e5",
//                           color:
//                             order.status === "Delivered" ? "#155724" :
//                             order.status === "Cancelled" ? "#721c24" :
//                             order.status === "Shipped" ? "#856404" : "#383d41",
//                         }}
//                       >
//                         {order.status || "Pending"}
//                       </span>
//                     </td>
//                     <td style={{ border: "1px solid #ddd", padding: "12px" }}>
//                       <select
//                         value={order.status || "Processing"}
//                         onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                         style={{
//                           padding: "8px",
//                           borderRadius: "4px",
//                           border: "1px solid #ccc",
//                         }}
//                       >
//                         <option value="Processing">Processing</option>
//                         <option value="Shipped">Shipped</option>
//                         <option value="Delivered">Delivered</option>
//                         <option value="Cancelled">Cancelled</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminOrders;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const refreshToken = localStorage.getItem("refreshToken"); // store this securely

  // Helper: Refresh access token
  const refreshAccessToken = async () => {
    if (!refreshToken) return null;
    try {
      const { data } = await axios.post("http://localhost:5000/api/admin/refresh-token", {
        token: refreshToken,
      });
      localStorage.setItem("adminToken", data.accessToken);
      return data.accessToken;
    } catch (err) {
      console.error("Refresh token failed:", err);
      localStorage.removeItem("adminToken");
      localStorage.removeItem("refreshToken");
      navigate("/admin-login");
      return null;
    }
  };

  // Fetch all orders
  const fetchOrders = async (currentToken) => {
    if (!currentToken) {
      setError("Admin login required. Redirecting...");
      setTimeout(() => navigate("/admin-login"), 2000);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get("http://localhost:5000/api/admin/orders", {
        headers: { Authorization: `Bearer ${currentToken}` },
      });

      setOrders(data.data || data.orders || []);
    } catch (err) {
      console.error("Failed to fetch orders:", err);

      // Token expired
      if (err.response?.status === 401 || err.response?.data?.expired) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          // Retry fetching with new token
          fetchOrders(newToken);
          return;
        }
        setError("Session expired. Redirecting...");
        setTimeout(() => navigate("/admin-login"), 2000);
      } else {
        setError(err.response?.data?.message || "Failed to load orders.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders(token);
  }, [token, navigate]);

  // Update single order status
  const handleStatusChange = async (orderId, newStatus) => {
    let currentToken = localStorage.getItem("adminToken");
    if (!currentToken) {
      alert("Admin authentication required.");
      return;
    }

    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/admin/orders/${orderId}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${currentToken}` } }
      );

      const updatedOrder = data.data || data;
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? updatedOrder : o))
      );

      alert("Order status updated successfully!");
    } catch (err) {
      console.error("Status update failed:", err);

      // Token expired during status update
      if (err.response?.status === 401 || err.response?.data?.expired) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          handleStatusChange(orderId, newStatus); // Retry
          return;
        }
      }

      alert(err.response?.data?.message || "Failed to update order status.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Admin Orders Management</h1>

      {loading && <p style={{ textAlign: "center", padding: "40px" }}>Loading orders...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold", marginBottom: "20px" }}>{error}</p>}

      {!loading && !error && (
        <>
          {orders.length === 0 ? (
            <p style={{ textAlign: "center", padding: "40px" }}>No orders found in the system.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>Order ID</th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>Customer</th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>Total</th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>Status</th>
                  <th style={{ border: "1px solid #ddd", padding: "12px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {order._id.slice(-8).toUpperCase()}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      {order.user?.name || `${order.firstName || ""} ${order.lastName || ""}`.trim() || "Guest"}
                      {order.user?.email && <><br /><small>{order.user.email}</small></>}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      ₹{(order.totalAmount || order.total || 0).toFixed(2)}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      <span
                        style={{
                          padding: "6px 12px",
                          borderRadius: "20px",
                          background:
                            order.status === "Delivered" ? "#d4edda" :
                            order.status === "Cancelled" ? "#f8d7da" :
                            order.status === "Shipped" ? "#fff3cd" : "#e2e3e5",
                          color:
                            order.status === "Delivered" ? "#155724" :
                            order.status === "Cancelled" ? "#721c24" :
                            order.status === "Shipped" ? "#856404" : "#383d41",
                        }}
                      >
                        {order.status || "Pending"}
                      </span>
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "12px" }}>
                      <select
                        value={order.status || "Processing"}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
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
          )}
        </>
      )}
    </div>
  );
};

export default AdminOrders;