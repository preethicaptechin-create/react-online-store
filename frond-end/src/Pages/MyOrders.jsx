// import { useEffect, useState } from "react";
// import "./MyOrders.css";

// const BASE_URL = "http://localhost:5000";

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     fetch(`${BASE_URL}/api/orders/my-orders`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setOrders(data?.orders || []);
//         setTotalOrders(data?.totalOrders || 0);
//         setLoading(false);
//       })
//       .catch(() => {
//         setOrders([]);
//         setTotalOrders(0);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="orders-loading">Loading orders...</p>;
//   }

//   return (
//     <div className="orders-container">
//       <h2 className="orders-title">My Orders</h2>

//       <p className="orders-count">
//         You have placed <b>{totalOrders}</b> orders
//       </p>

//       {orders.length === 0 ? (
//         <p className="no-orders">No orders found</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="order-card">
//             <p className="order-id">
//               <b>Order #{index + 1}</b>
//             </p>

//             <p>Status: <span>{order.status || "Pending"}</span></p>

//             <p className="order-total">
//               Total Amount: ₹{order.total}
//             </p>

//             <p className="order-date">
//               Ordered Date:{" "}
//               {new Date(order.createdAt).toLocaleDateString()}
//             </p>

//             <div className="order-products">
//               <p><b>Products:</b></p>
//               <ul>
//                 {order.items?.map((item, i) => (
//                   <li key={i}>
//                     {item.name} × {item.quantity} — ₹{item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyOrders;




// import { useEffect, useState } from "react";
// import { authFetch } from "../utils/authFetch"; // adjust path if your folder structure is different
// import "./MyOrders.css";

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMyOrders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await authFetch("/api/orders/my-orders");

//         setOrders(data?.orders || []);
//         setTotalOrders(data?.totalOrders || 0);
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//         setError(err.message || "Failed to load your orders");
//         setOrders([]);
//         setTotalOrders(0);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyOrders();
//   }, []);

//   if (loading) {
//     return <p className="orders-loading">Loading orders...</p>;
//   }

//   if (error) {
//     return (
//       <div className="orders-error">
//         <p>{error}</p>
//         {error.includes("Session expired") && (
//           <p>Please <a href="/login">log in again</a>.</p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="orders-container">
//       <h2 className="orders-title">My Orders</h2>

//       <p className="orders-count">
//         You have placed <b>{totalOrders}</b> orders
//       </p>

//       {orders.length === 0 ? (
//         <p className="no-orders">No orders found</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="order-card">
//             <p className="order-id">
//               <b>Order #{index + 1}</b>
//             </p>

//             <p>
//               Status: <span>{order.status || "Pending"}</span>
//             </p>

//             <p className="order-total">
//               Total Amount: ₹{order.total}
//             </p>

//             <p className="order-date">
//               Ordered Date: {new Date(order.createdAt).toLocaleDateString()}
//             </p>

//             <div className="order-products">
//               <p><b>Products:</b></p>
//               <ul>
//                 {order.items?.map((item, i) => (
//                   <li key={i}>
//                     {item.name} × {item.quantity} — ₹{item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { MESSAGES, CURRENCY, ROUTES } from "../utils/config";
// import { authFetch } from "../utils/authFetch"; // assuming you have a helper for authenticated fetch
// import "./MyOrders.css";

// // ✅ Define API routes locally
// const API_ROUTES = {
//   myOrders: "/api/orders/me",
// };

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMyOrders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await authFetch(API_ROUTES.myOrders);

//         setOrders(data?.orders || []);
//         setTotalOrders(data?.totalOrders || 0);
//       } catch (err) {
//         console.error("Failed to load orders:", err);
//         setError(err.message || MESSAGES.somethingWentWrong);
//         setOrders([]);
//         setTotalOrders(0);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyOrders();
//   }, []);

//   if (loading) {
//     return <p className="orders-loading">{MESSAGES.loadingOrders}</p>;
//   }

//   if (error) {
//     return (
//       <div className="orders-error">
//         <p>{error}</p>
//         {error.includes("Session expired") && (
//           <p>
//             Please <a href={ROUTES.login}>log in again</a>.
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="orders-container">
//       <h2 className="orders-title">{MESSAGES.myOrders}</h2>

//       <p className="orders-count">
//         {MESSAGES.ordersPlaced} <b>{totalOrders}</b>
//       </p>

//       {orders.length === 0 ? (
//         <p className="no-orders">{MESSAGES.noOrders}</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="order-card">
//             <p className="order-id">
//               <b>{MESSAGES.order} #{index + 1}</b>
//             </p>

//             <p>
//               {MESSAGES.status}: <span>{order.status || MESSAGES.pending}</span>
//             </p>

//             <p className="order-total">
//               {MESSAGES.total}: {CURRENCY}{order.total}
//             </p>

//             <p className="order-date">
//               {MESSAGES.orderedDate}:{" "}
//               {new Date(order.createdAt).toLocaleDateString()}
//             </p>

//             <div className="order-products">
//               <p><b>{MESSAGES.products}:</b></p>
//               <ul>
//                 {order.items?.map((item, i) => (
//                   <li key={i}>
//                     {item.name} × {item.quantity} — {CURRENCY}{item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyOrders;



// import React, { useState, useEffect } from "react";
// import { MESSAGES, CURRENCY, ROUTES } from "../utils/config";
// import { authFetch } from "../utils/authFetch"; 
// import "./MyOrders.css";

// // ✅ Updated API route to match backend
// const API_ROUTES = {
//   myOrders: "/api/orders/my-orders",
// };

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMyOrders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await authFetch(API_ROUTES.myOrders);

//         // ✅ Expecting consistent backend response: { orders: [], totalOrders: n }
//         setOrders(data?.orders || []);
//         setTotalOrders(data?.totalOrders || 0);
//       } catch (err) {
//         console.error("Failed to load orders:", err);

//         // ✅ Better error handling for network/server/auth issues
//         if (err.message?.includes("401") || err.message?.includes("Unauthorized")) {
//           setError("Session expired. Please log in again.");
//         } else {
//           setError(err.message || MESSAGES.somethingWentWrong);
//         }

//         setOrders([]);
//         setTotalOrders(0);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyOrders();
//   }, []);

//   if (loading) {
//     return <p className="orders-loading">{MESSAGES.loadingOrders || "Loading orders..."}</p>;
//   }

//   if (error) {
//     return (
//       <div className="orders-error">
//         <p>{error}</p>
//         {error.includes("Session expired") && (
//           <p>
//             Please <a href={ROUTES.login}>log in again</a>.
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="orders-container">
//       <h2 className="orders-title">{MESSAGES.myOrders || "My Orders"}</h2>

//       <p className="orders-count">
//         {MESSAGES.ordersPlaced || "Orders Placed:"} <b>{totalOrders}</b>
//       </p>

//       {orders.length === 0 ? (
//         <p className="no-orders">{MESSAGES.noOrders || "No orders found."}</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="order-card">
//             <p className="order-id">
//               <b>{MESSAGES.order || "Order"} #{index + 1}</b>
//             </p>

//             <p>
//               {MESSAGES.status || "Status"}: <span>{order.status || MESSAGES.pending || "Pending"}</span>
//             </p>

//             <p className="order-total">
//               {MESSAGES.total || "Total"}: {CURRENCY}{order.total}
//             </p>

//             <p className="order-date">
//               {MESSAGES.orderedDate || "Ordered Date"}:{" "}
//               {new Date(order.createdAt).toLocaleDateString()}
//             </p>

//             <div className="order-products">
//               <p><b>{MESSAGES.products || "Products"}:</b></p>
//               <ul>
//                 {order.items?.map((item, i) => (
//                   <li key={i}>
//                     {item.name} × {item.quantity} — {CURRENCY}{item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyOrders;


// import React, { useState, useEffect } from "react";
// import { MESSAGES, CURRENCY, ROUTES, API_ROUTES } from "../utils/config";
// import { authFetch } from "../utils/authFetch"; 
// import "./MyOrders.css";

// function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMyOrders = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         // ✅ Use API_ROUTES from config
//         const data = await authFetch(API_ROUTES.myOrders);

//         // ✅ Expecting consistent backend response: { orders: [], totalOrders: n }
//         setOrders(data?.orders || []);
//         setTotalOrders(data?.totalOrders || 0);
//       } catch (err) {
//         console.error("Failed to load orders:", err);

//         // ✅ Better error handling for network/server/auth issues
//         if (err.message?.includes("401") || err.message?.includes("Unauthorized")) {
//           setError(MESSAGES.sessionExpired || "Session expired. Please log in again.");
//         } else {
//           setError(err.message || MESSAGES.somethingWentWrong);
//         }

//         setOrders([]);
//         setTotalOrders(0);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyOrders();
//   }, []);

//   if (loading) {
//     return <p className="orders-loading">{MESSAGES.loadingOrders}</p>;
//   }

//   if (error) {
//     return (
//       <div className="orders-error">
//         <p>{error}</p>
//         {error === MESSAGES.sessionExpired && (
//           <p>
//             Please <a href={ROUTES.login}>{MESSAGES.loginLinkText || "log in again"}</a>.
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className="orders-container">
//       <h2 className="orders-title">{MESSAGES.myOrders}</h2>

//       <p className="orders-count">
//         {MESSAGES.ordersPlaced} <b>{totalOrders}</b>
//       </p>

//       {orders.length === 0 ? (
//         <p className="no-orders">{MESSAGES.noOrders}</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="order-card">
//             <p className="order-id">
//               <b>{`${MESSAGES.order} #${index + 1}`}</b>
//             </p>

//             <p>
//               {MESSAGES.status}: <span>{order.status || MESSAGES.pending}</span>
//             </p>

//             <p className="order-total">
//               {MESSAGES.total}: {CURRENCY}{order.total}
//             </p>

//             <p className="order-date">
//               {MESSAGES.orderedDate}: {new Date(order.createdAt).toLocaleDateString()}
//             </p>

//             <div className="order-products">
//               <p><b>{MESSAGES.products}:</b></p>
//               <ul>
//                 {order.items?.map((item, i) => (
//                   <li key={i}>
//                     {item.name} × {item.quantity} — {CURRENCY}{item.price}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyOrders;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MESSAGES, CURRENCY, ROUTES, API_ROUTES } from "../utils/config";
import { authFetch } from "../utils/authFetch";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        // ✅ Fetch orders from backend
        const data = await authFetch(API_ROUTES.myOrders);

        setOrders(data?.orders || []);
        setTotalOrders(data?.totalOrders || 0);
      } catch (err) {
        console.error("Failed to load orders:", err);

        // ✅ Handle session expiration / no token
        if (
          err.response?.status === 401 ||
          err.message?.includes("Unauthorized") ||
          err.message?.includes("No access token") ||
          err.message?.includes("Session expired")
        ) {
          setError(MESSAGES.sessionExpired || "Session expired. Please log in again.");
        } else {
          setError(err.message || MESSAGES.somethingWentWrong);
        }

        setOrders([]);
        setTotalOrders(0);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, []);

  if (loading) {
    return <p className="orders-loading">{MESSAGES.loadingOrders}</p>;
  }

  if (error) {
    return (
      <div className="orders-error">
        <p>{error}</p>
        {(error === MESSAGES.sessionExpired || error?.includes("log in") || error?.includes("No access token")) && (
          <p>
            Please <Link to={ROUTES.login}>{MESSAGES.loginLinkText}</Link>.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2 className="orders-title">{MESSAGES.myOrders}</h2>

      <p className="orders-count">
        {MESSAGES.ordersPlaced} <b>{totalOrders}</b>
      </p>
      {orders.length === 0 ? (
        <div className="no-orders">
          <h3>You have 0 orders</h3>
          <p>Looks like you haven’t placed any orders yet.</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="order-card">
            <p className="order-id">
              <b>{`${MESSAGES.order} #${index + 1}`}</b>
            </p>

            <p>
              {MESSAGES.status}: <span>{order.status || MESSAGES.pending}</span>
            </p>

            <p className="order-total">
              {MESSAGES.total}: {CURRENCY}{order.total}
            </p>

            <p className="order-date">
              {MESSAGES.orderedDate}: {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <div className="order-products">
              <p><b>{MESSAGES.products}:</b></p>
              <ul>
                {order.items?.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity} — {CURRENCY}{item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;