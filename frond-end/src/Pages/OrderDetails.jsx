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




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { refreshAccessToken } from "../utils/refreshToken";
import "./OrderDetails.css";

const OrderDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    paymentMethod: "",
  });

  // ✅ TOAST STATE
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const cartTotal = parseFloat(localStorage.getItem("cartTotal") || "0");
    let token = localStorage.getItem("accessToken");

    // ❌ alert removed → ✅ toast
    if (!cartItems.length) {
      showToast("Your cart is empty 🛒", "error");
      return;
    }

    if (!token) {
      showToast("Please login to place order", "error");
      setTimeout(() => navigate("/login"), 1200);
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
      let res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      // 🔹 Refresh token if 401
      if (res.status === 401) {
        token = await refreshAccessToken();
        if (!token) return;

        res = await fetch("http://localhost:5000/api/orders", {
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
        // ✅ Clear cart
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTotal");
        localStorage.removeItem("cart");

        window.dispatchEvent(new Event("cartUpdated"));

        // ✅ SUCCESS TOAST
        showToast("Order placed successfully ✅", "success");

        setTimeout(() => {
          navigate(`/order-confirmation/${data._id}`);
        }, 1200);
      } else {
        showToast(data.message || "Failed to place order", "error");
      }
    } catch (err) {
      console.error("Order error:", err);
      showToast("Something went wrong!", "error");
    }
  };

  return (
    <div className="order-details-page">
      <h2>Enter Order Details</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <div className="name-row">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <label>Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="UPI">UPI</option>
          <option value="Credit/Debit Card">Credit/Debit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>

        <button type="submit">Place Order</button>
      </form>

      {/* ✅ TOAST UI */}
      {toast && (
        <div className={`snackbar snackbar-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;