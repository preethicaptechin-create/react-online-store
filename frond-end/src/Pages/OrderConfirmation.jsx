


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./OrderConfirmation.css";

// const OrderConfirmation = () => {
//   const { id } = useParams(); // must match route param
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         console.error("User not logged in");
//         return;
//       }

//       try {
//         const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error(`Failed to fetch order: ${res.status}`);
//         const data = await res.json();
//         setOrder(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchOrder();
//   }, [id]);

//   if (!order) return <p>Loading...</p>;

//   return (
//     <div className="order-container">
//       <h2>Order Confirmed!</h2>
//       <p className="success-message">Thank you for your purchase ❤️</p>

//       <div className="order-details">
//         <p><strong>Order ID:</strong> {order._id}</p>
//         <p><strong>Total:</strong> ₹{order.total}</p>
//         <p><strong>Status:</strong> {order.status}</p>
//       </div>

//       <ul className="order-items">
//         {order.items.map((item) => (
//           <li key={item.product}>
//             {item.name} x {item.quantity} {item.size && `(Size: ${item.size})`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderConfirmation;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./OrderConfirmation.css";

// const OrderConfirmation = () => {
//   const navigate = useNavigate();
//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const savedOrder = localStorage.getItem("orderDetails");
//     const token = localStorage.getItem("accessToken");

//     if (!savedOrder) {
//       // No order filled, redirect to order page
//       navigate("/order-details");
//       return;
//     }

//     if (!token) {
//       // Not logged in, redirect to login
//       navigate("/login");
//       return;
//     }

//     setOrderDetails(JSON.parse(savedOrder));
//   }, [navigate]);

//   if (!orderDetails) return <p>Loading order info...</p>;

//   return (
//     <div className="order-container">
//       <h2>Order Confirmed!</h2>
//       <p className="success-message">Thank you for your purchase ❤️</p>

//       <div className="order-details">
//         <p><strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}</p>
//         <p><strong>Address:</strong> {orderDetails.address}</p>
//         <p><strong>Mobile:</strong> {orderDetails.mobile}</p>
//         <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
//       </div>

//       <p>Your order is being processed. You will receive updates shortly.</p>
//     </div>
//   );
// };

// export default OrderConfirmation;




// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./OrderConfirmation.css";

// const OrderConfirmation = () => {
//   const navigate = useNavigate();
//   const { orderId } = useParams(); // get orderId from URL
//   const [orderDetails, setOrderDetails] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//       alert("Please login first");
//       navigate("/login");
//       return;
//     }

//     // fetch order from backend
//     const fetchOrder = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();

//         if (res.ok) {
//           setOrderDetails(data);
//         } else {
//           alert(data.message || "Order not found");
//           navigate("/"); // go home if order not found
//         }
//       } catch (err) {
//         console.error(err);
//         alert("Failed to fetch order");
//         navigate("/");
//       }
//     };

//     fetchOrder();
//   }, [navigate, orderId]);

//   if (!orderDetails) return <p>Loading order info...</p>;

//   return (
//     <div className="order-container">
//       <h2>Order Confirmed!</h2>
//       <p className="success-message">Thank you for your purchase ❤️</p>

//       <div className="order-details">
//         <p><strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}</p>
//         <p><strong>Address:</strong> {orderDetails.address}</p>
//         <p><strong>Mobile:</strong> {orderDetails.mobile}</p>
//         <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>

//         <h3>Items Ordered:</h3>
//         {orderDetails.items.map((item, index) => (
//           <p key={index}>
//             {item.name} - ₹{item.price} × {item.quantity} {item.size && `(Size: ${item.size})`}
//           </p>
//         ))}

//         <p><strong>Total:</strong> ₹{orderDetails.total}</p>
//       </div>

//       <p>Your order is being processed. You will receive updates shortly.</p>
//     </div>
//   );
// };

// export default OrderConfirmation;



// import { refreshAccessToken } from "../utils/refreshToken";

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./OrderConfirmation.css";

// const OrderConfirmation = () => {
//   const navigate = useNavigate();
//   const { orderId } = useParams();

//   const [orderDetails, setOrderDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//  useEffect(() => {
//   const fetchOrder = async () => {
//     let token = localStorage.getItem("accessToken");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     try {
//       let res = await fetch(
//         `http://localhost:5000/api/orders/${orderId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // 🔥 If access token expired
//       if (res.status === 401) {
//         console.log("Access token expired. Refreshing...");

//         token = await refreshAccessToken(); // 👈 CALL REFRESH

//         if (!token) return; // already redirected

//         // 🔥 Retry with new token
//         res = await fetch(
//           `http://localhost:5000/api/orders/${orderId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//       }

//       const data = await res.json();

//       if (res.ok) {
//         setOrderDetails(data);
//       } else {
//         alert(data.message || "Order not found");
//         navigate("/");
//       }

//     } catch (err) {
//       console.error("Fetch error:", err);
//       navigate("/");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchOrder();
// }, [orderId, navigate]);

//   if (loading) {
//     return <h2>Loading order details...</h2>;
//   }

//   if (!orderDetails) {
//     return <h2>Order not available</h2>;
//   }

//   return (
//     <div className="order-container">
//       <h2>Order Confirmed! 🎉</h2>
//       <p className="success-message">
//         Thank you for your purchase ❤️
//       </p>

//       <div className="order-details">

//         <p>
//           <strong>Order ID:</strong> {orderId}
//         </p>

//         <p>
//           <strong>Name:</strong> {orderDetails.firstName}{" "}
//           {orderDetails.lastName}
//         </p>

//         <p>
//           <strong>Address:</strong> {orderDetails.address}
//         </p>

//         <p>
//           <strong>Mobile:</strong> {orderDetails.mobile}
//         </p>

//         <p>
//           <strong>Payment Method:</strong>{" "}
//           {orderDetails.paymentMethod}
//         </p>

//         <h3>Items Ordered:</h3>

//         {orderDetails.items?.map((item, index) => (
//           <p key={index}>
//             {item.name} - ₹{item.price} × {item.quantity}{" "}
//             {item.size && `(Size: ${item.size})`}
//           </p>
//         ))}

//         <p>
//           <strong>Total:</strong> ₹{orderDetails.total}
//         </p>
//       </div>

//       <p>
//         Your order is being processed. You will receive updates shortly.
//       </p>
//     </div>
//   );
// };

// export default OrderConfirmation;






// import { refreshAccessToken } from "../utils/refreshToken";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./OrderConfirmation.css";

// const OrderConfirmation = () => {
//   const navigate = useNavigate();
//   const { orderId } = useParams();

//   const [orderDetails, setOrderDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       let token = localStorage.getItem("accessToken");

//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         let res = await fetch(
//           `http://localhost:5000/api/orders/${orderId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         // 🔥 If access token expired
//         if (res.status === 401) {
//           console.log("Access token expired. Refreshing...");
//           token = await refreshAccessToken();
//           if (!token) return;

//           // Retry with new token
//           res = await fetch(
//             `http://localhost:5000/api/orders/${orderId}`,
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );
//         }

//         const data = await res.json();

//         if (res.ok) {
//           setOrderDetails(data);

//           // 🔥 Clear cart after order confirmation
//           localStorage.removeItem("cartItems");
//           localStorage.removeItem("cartTotal");
//           localStorage.removeItem("cart");
//           window.dispatchEvent(new Event("cartUpdated")); // update Cart page state
//         } else {
//           alert(data.message || "Order not found");
//           navigate("/");
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         navigate("/");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [orderId, navigate]);

//   if (loading) return <h2>Loading order details...</h2>;
//   if (!orderDetails) return <h2>Order not available</h2>;

//   return (
//     <div className="order-container">
//       <h2>Order Confirmed! 🎉</h2>
//       <p className="success-message">Thank you for your purchase ❤️</p>

//       <div className="order-details">
//         <p><strong>Order ID:</strong> {orderId}</p>
//         <p>
//           <strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}
//         </p>
//         <p><strong>Address:</strong> {orderDetails.address}</p>
//         <p><strong>Mobile:</strong> {orderDetails.mobile}</p>
//         <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>

//         <h3>Items Ordered:</h3>
//         {orderDetails.items?.map((item, index) => (
//           <p key={index}>
//             {item.name} - ₹{item.price} × {item.quantity}{" "}
//             {item.size && `(Size: ${item.size})`}
//           </p>
//         ))}

//         <p><strong>Total:</strong> ₹{orderDetails.total}</p>
//       </div>

//       <p>Your order is being processed. You will receive updates shortly.</p>
//     </div>
//   );
// };

// export default OrderConfirmation;




import { refreshAccessToken } from "../utils/refreshToken";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      let token = localStorage.getItem("accessToken");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // Initial fetch
        let res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // 🔹 Token expired → refresh & retry
        if (res.status === 401) {
          console.log("Access token expired. Refreshing...");
          token = await refreshAccessToken();
          if (!token) return; // already redirected to login

          res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        const data = await res.json();

        if (res.ok) {
          setOrderDetails(data);

          // 🔹 Clear cart after order confirmation
          localStorage.removeItem("cartItems");
          localStorage.removeItem("cartTotal");
          localStorage.removeItem("cart");

          // 🔹 Update cart badge in header
          window.dispatchEvent(new Event("cartUpdated"));
        } else {
          alert(data.message || "Order not found");
          navigate("/");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);

  if (loading) return <h2>Loading order details...</h2>;
  if (!orderDetails) return <h2>Order not available</h2>;

  return (
    <div className="order-container">
      <h2>Order Confirmed! 🎉</h2>
      <p className="success-message">Thank you for your purchase ❤️</p>

      <div className="order-details">
        <p><strong>Order ID:</strong> {orderId}</p>
        <p>
          <strong>Name:</strong> {orderDetails.firstName} {orderDetails.lastName}
        </p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
        <p><strong>Mobile:</strong> {orderDetails.mobile}</p>
        <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>

        <h3>Items Ordered:</h3>
        {orderDetails.items?.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price} × {item.quantity}{" "}
            {item.size && `(Size: ${item.size})`}
          </p>
        ))}

        <p><strong>Total:</strong> ₹{orderDetails.total}</p>
      </div>

      <p>Your order is being processed. You will receive updates shortly.</p>
    </div>
  );
};

export default OrderConfirmation;