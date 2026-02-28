// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store order info temporarily in localStorage
//     localStorage.setItem("orderDetails", JSON.stringify(formData));

//     // Navigate to confirmation page
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">
//         {/* First Name */}
//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />

//         {/* Last Name */}
//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />

//         {/* Address */}
//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         {/* Mobile */}
//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         {/* Payment Method */}
//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Continue</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Store order info temporarily
//     localStorage.setItem("orderDetails", JSON.stringify(formData));

//     // Navigate to confirmation page
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">

//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Continue</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//   const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
// const token = localStorage.getItem("accessToken");

//   if (!cartItems.length) return alert("Cart is empty!");
//   if (!token) {
//     alert("Please login first");
//     navigate("/login");
//     return;
//   }

//   const orderData = {
//     items: cartItems.map(item => ({
//       product: item._id,
//       name: item.name,
//       price: item.price,
//       quantity: item.qty,
//       size: item.size,
//     })),
//     total: cartTotal,
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     address: formData.address,
//     mobile: formData.mobile,
//     paymentMethod: formData.paymentMethod,
//   };

//   try {
//     const res = await fetch("http://localhost:5000/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(orderData),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.removeItem("cartItems");
//       localStorage.removeItem("cartTotal");

//       navigate(`/order-confirmation/${data._id}`);
//     } else {
//       alert(data.message || "Failed to place order");
//     }

//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong!");
//   }
// };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
// //     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
// //     const token = localStorage.getItem("accessToken");

// //     if (!cartItems.length) return alert("Cart is empty!");
// //     if (!token) {
// //       alert("Please login first");
// //       navigate("/login");
// //       return;
// //     }

// //     const orderData = {
// //       user: null, // backend will fill from JWT
// //       items: cartItems.map(item => ({
// //         product: item._id,
// //         name: item.name,
// //         price: item.price,
// //         quantity: item.qty,
// //         size: item.size,
// //       })),
// //       total: cartTotal,
// //       firstName: formData.firstName,
// //       lastName: formData.lastName,
// //       address: formData.address,
// //       mobile: formData.mobile,
// //       paymentMethod: formData.paymentMethod,
// //     };

// //     try {
// //       const res = await fetch("http://localhost:5000/api/orders", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(orderData),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         // Clear cart after order
// //         localStorage.removeItem("cart");
// //         localStorage.removeItem("cartItems");
// //         localStorage.removeItem("cartTotal");

// //         navigate(`/order-confirmation/${data._id}`);
// //       } else {
// //         alert(data.message || "Failed to place order");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       alert("Something went wrong!");
// //     }
// //   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { refreshAccessToken } from "../utils/refreshToken";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
//     let token = localStorage.getItem("accessToken");

//     if (!cartItems.length) return alert("Cart is empty!");

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     const orderData = {
//       items: cartItems.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: item.qty,
//         size: item.size,
//       })),
//       total: cartTotal,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       mobile: formData.mobile,
//       paymentMethod: formData.paymentMethod,
//     };

//     try {
//       let res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       // 🔥 If token expired
//       if (res.status === 401) {
//         console.log("Access token expired. Refreshing...");

//         token = await refreshAccessToken();
//         if (!token) return;

//         // Retry with new token
//         res = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(orderData),
//         });
//       }

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("cartTotal");

//         navigate(`/order-confirmation/${data._id}`);
//       } else {
//         alert(data.message || "Failed to place order");
//       }

//     } catch (err) {
//       console.error("Order error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { refreshAccessToken } from "../utils/refreshToken";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
//     let token = localStorage.getItem("accessToken");

//     if (!cartItems.length) return alert("Cart is empty!");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     const orderData = {
//       items: cartItems.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: item.qty,
//         size: item.size,
//       })),
//       total: cartTotal,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       mobile: formData.mobile,
//       paymentMethod: formData.paymentMethod,
//     };

//     try {
//       let res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       // 🔥 Token expired? Refresh & retry
//       if (res.status === 401) {
//         token = await refreshAccessToken();
//         if (!token) return;

//         res = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(orderData),
//         });
//       }

//       const data = await res.json();

//       if (res.ok) {
//         // 🔥 Clear all cart storage
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("cartTotal");
//         localStorage.removeItem("cart");

//         // 🔥 Trigger cart update event
//         window.dispatchEvent(new Event("cartUpdated"));

//         navigate(`/order-confirmation/${data._id}`);
//       } else {
//         alert(data.message || "Failed to place order");
//       }

//     } catch (err) {
//       console.error("Order error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { refreshAccessToken } from "../utils/refreshToken";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
//     let token = localStorage.getItem("accessToken");

//     if (!cartItems.length) {
//       alert("Cart is empty!");
//       return;
//     }

//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     const orderData = {
//       items: cartItems.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: item.qty,
//         size: item.size,
//       })),
//       total: cartTotal,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       mobile: formData.mobile,
//       paymentMethod: formData.paymentMethod,
//     };

//     try {
//       let res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       // 🔹 Refresh token if 401 Unauthorized
//       if (res.status === 401) {
//         token = await refreshAccessToken();
//         if (!token) return; // user redirected to login

//         res = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(orderData),
//         });
//       }

//       const data = await res.json();

//       if (res.ok) {
//         // ✅ Clear cart after successful order
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("cartTotal");
//         localStorage.removeItem("cart");

//         // ✅ Notify other components (like Header badge)
//         window.dispatchEvent(new Event("cartUpdated"));

//         navigate(`/order-confirmation/${data._id}`);
//       } else {
//         alert(data.message || "Failed to place order");
//       }
//     } catch (err) {
//       console.error("Order error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>
//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderDetails;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { refreshAccessToken } from "../utils/refreshToken";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   // ✅ TOAST STATE
//   const [toast, setToast] = useState(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
//     let token = localStorage.getItem("accessToken");

//     // ❌ alert removed → ✅ toast
//     if (!cartItems.length) {
//       showToast("Your cart is empty 🛒", "error");
//       return;
//     }

//     if (!token) {
//       showToast("Please login to place order", "error");
//       setTimeout(() => navigate("/login"), 1200);
//       return;
//     }

//     const orderData = {
//       items: cartItems.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: item.qty,
//         size: item.size,
//       })),
//       total: cartTotal,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       mobile: formData.mobile,
//       paymentMethod: formData.paymentMethod,
//     };

//     try {
//       let res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       // 🔹 Refresh token if 401
//       if (res.status === 401) {
//         token = await refreshAccessToken();
//         if (!token) return;

//         res = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(orderData),
//         });
//       }

//       const data = await res.json();

//       if (res.ok) {
//         // ✅ Clear cart
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("cartTotal");
//         localStorage.removeItem("cart");

//         window.dispatchEvent(new Event("cartUpdated"));

//         // ✅ SUCCESS TOAST
//         showToast("Order placed successfully ✅", "success");

//         setTimeout(() => {
//           navigate(`/order-confirmation/${data._id}`);
//         }, 1200);
//       } else {
//         showToast(data.message || "Failed to place order", "error");
//       }
//     } catch (err) {
//       console.error("Order error:", err);
//       showToast("Something went wrong!", "error");
//     }
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>

//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div>
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <label>Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />

//         <label>Mobile Number</label>
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <label>Payment Method</label>
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select</option>
//           <option value="UPI">UPI</option>
//           <option value="Credit/Debit Card">Credit/Debit Card</option>
//           <option value="Cash on Delivery">Cash on Delivery</option>
//         </select>

//         <button type="submit">Place Order</button>
//       </form>

//       {/* ✅ TOAST UI */}
//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { refreshAccessToken } from "../utils/refreshToken";
// import "./OrderDetails.css";

// const OrderDetails = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     mobile: "",
//     paymentMethod: "",
//   });

//   // NEW: validation errors
//   const [errors, setErrors] = useState({});

//   const [toast, setToast] = useState(null);

//   const showToast = (message, type = "success") => {
//     setToast({ message, type });
//     setTimeout(() => setToast(null), 2800);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // First Name
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     } else if (formData.firstName.trim().length < 2) {
//       newErrors.firstName = "First name is too short";
//     }

//     // Last Name
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     } else if (formData.lastName.trim().length < 2) {
//       newErrors.lastName = "Last name is too short";
//     }

//     // Address
//     if (!formData.address.trim()) {
//       newErrors.address = "Address is required";
//     } else if (formData.address.trim().length < 10) {
//       newErrors.address = "Please enter a valid full address";
//     }

//     // Mobile (Indian format - basic check)
//     const mobileRegex = /^[6-9]\d{9}$/;
//     if (!formData.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!mobileRegex.test(formData.mobile.trim())) {
//       newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
//     }

//     // Payment Method
//     if (!formData.paymentMethod) {
//       newErrors.paymentMethod = "Please select a payment method";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Run validation
//     if (!validateForm()) {
//       showToast("Please fix the errors in the form", "error");
//       return;
//     }

//     const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
//     let token = localStorage.getItem("accessToken");

//     if (!cartItems.length) {
//       showToast("Your cart is empty 🛒", "error");
//       return;
//     }

//     if (!token) {
//       showToast("Please login to place order", "error");
//       setTimeout(() => navigate("/login"), 1200);
//       return;
//     }

//     const orderData = {
//       items: cartItems.map((item) => ({
//         product: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: item.qty,
//         size: item.size,
//       })),
//       total: cartTotal,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       mobile: formData.mobile,
//       paymentMethod: formData.paymentMethod,
//     };

//     try {
//       let res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (res.status === 401) {
//         token = await refreshAccessToken();
//         if (!token) return;

//         res = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(orderData),
//         });
//       }

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.removeItem("cartItems");
//         localStorage.removeItem("cartTotal");
//         localStorage.removeItem("cart");

//         window.dispatchEvent(new Event("cartUpdated"));

//         showToast("Order placed successfully ✅", "success");

//         setTimeout(() => {
//           navigate(`/order-confirmation/${data._id}`);
//         }, 1200);
//       } else {
//         showToast(data.message || "Failed to place order", "error");
//       }
//     } catch (err) {
//       console.error("Order error:", err);
//       showToast("Something went wrong!", "error");
//     }
//   };

//   return (
//     <div className="order-details-page">
//       <h2>Enter Order Details</h2>

//       <form onSubmit={handleSubmit} className="order-form">
//         <div className="name-row">
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//             {errors.firstName && (
//               <span className="error-text">{errors.firstName}</span>
//             )}
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//             {errors.lastName && (
//               <span className="error-text">{errors.lastName}</span>
//             )}
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//           {errors.address && <span className="error-text">{errors.address}</span>}
//         </div>

//         <div className="form-group">
//           <label>Mobile Number</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             maxLength={10}
//             placeholder="10-digit number"
//           />
//           {errors.mobile && <span className="error-text">{errors.mobile}</span>}
//         </div>

//         <div className="form-group">
//           <label>Payment Method</label>
//           <select
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option value="UPI">UPI</option>
//             <option value="Credit/Debit Card">Credit/Debit Card</option>
//             <option value="Cash on Delivery">Cash on Delivery</option>
//           </select>
//           {errors.paymentMethod && (
//             <span className="error-text">{errors.paymentMethod}</span>
//           )}
//         </div>

//         <button type="submit">Place Order</button>
//       </form>

//       {toast && (
//         <div className={`snackbar snackbar-${toast.type}`}>
//           {toast.message}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { refreshAccessToken } from "../utils/refreshToken";
import "./OrderDetails.css";

// Import config
import { BASE_URL, ROUTES, MESSAGES } from "../utils/config";

const OrderDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = MESSAGES.firstNameRequired;
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = MESSAGES.firstNameShort;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = MESSAGES.lastNameRequired;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = MESSAGES.lastNameShort;
    }

    if (!formData.address.trim()) {
      newErrors.address = MESSAGES.addressRequired;
    } else if (formData.address.trim().length < 10) {
      newErrors.address = MESSAGES.addressInvalid;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = MESSAGES.mobileRequired;
    } else if (!mobileRegex.test(formData.mobile.trim())) {
      newErrors.mobile = MESSAGES.mobileInvalid;
    }

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = MESSAGES.paymentMethodRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast(MESSAGES.fixFormErrors, "error");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
    let token = localStorage.getItem("accessToken");

    if (!cartItems.length) {
      showToast(MESSAGES.cartEmpty, "error");
      return;
    }

    if (!token) {
      showToast(MESSAGES.loginRequired, "error");
      setTimeout(() => navigate(ROUTES.login), 1200);
      return;
    }

    const orderData = {
      items: cartItems.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        size: item.size,
      })),
      total: cartTotal,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      mobile: formData.mobile,
      paymentMethod: formData.paymentMethod,
    };

    try {
      let res = await fetch(`${BASE_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      if (res.status === 401) {
        token = await refreshAccessToken();
        if (!token) return;

        res = await fetch(`${BASE_URL}/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(orderData),
        });
      }

      const data = await res.json();

      if (res.ok) {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotal");
        localStorage.removeItem("cart");

        window.dispatchEvent(new Event("cartUpdated"));

        showToast(MESSAGES.orderPlaced, "success");

        setTimeout(() => {
          navigate(`${ROUTES.orderConfirmation}/${data._id}`);
        }, 1200);
      } else {
        showToast(data.message || MESSAGES.orderFailed, "error");
      }
    } catch (err) {
      console.error("Order error:", err);
      showToast(MESSAGES.somethingWentWrong, "error");
    }
  };

  return (
    <div className="order-details-page">
      <h2>{MESSAGES.enterOrderDetails}</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <div className="name-row">
          <div className="form-group">
            <label>{MESSAGES.firstName}</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error-text">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>{MESSAGES.lastName}</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error-text">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>{MESSAGES.address}</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error-text">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>{MESSAGES.mobile}</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength={10}
            placeholder={MESSAGES.mobilePlaceholder}
          />
          {errors.mobile && <span className="error-text">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label>{MESSAGES.paymentMethod}</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="">{MESSAGES.select}</option>
            <option value="UPI">{MESSAGES.upi}</option>
            <option value="Credit/Debit Card">{MESSAGES.card}</option>
            <option value="Cash on Delivery">{MESSAGES.cod}</option>
          </select>
          {errors.paymentMethod && (
            <span className="error-text">{errors.paymentMethod}</span>
          )}
        </div>

        <button type="submit">{MESSAGES.placeOrder}</button>
      </form>

      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;