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




import { useEffect, useState } from "react";
import { authFetch } from "../utils/authFetch"; // adjust path if your folder structure is different
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await authFetch("/api/orders/my-orders");

        setOrders(data?.orders || []);
        setTotalOrders(data?.totalOrders || 0);
      } catch (err) {
        console.error("Failed to load orders:", err);
        setError(err.message || "Failed to load your orders");
        setOrders([]);
        setTotalOrders(0);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, []);

  if (loading) {
    return <p className="orders-loading">Loading orders...</p>;
  }

  if (error) {
    return (
      <div className="orders-error">
        <p>{error}</p>
        {error.includes("Session expired") && (
          <p>Please <a href="/login">log in again</a>.</p>
        )}
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>

      <p className="orders-count">
        You have placed <b>{totalOrders}</b> orders
      </p>

      {orders.length === 0 ? (
        <p className="no-orders">No orders found</p>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="order-card">
            <p className="order-id">
              <b>Order #{index + 1}</b>
            </p>

            <p>
              Status: <span>{order.status || "Pending"}</span>
            </p>

            <p className="order-total">
              Total Amount: ₹{order.total}
            </p>

            <p className="order-date">
              Ordered Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <div className="order-products">
              <p><b>Products:</b></p>
              <ul>
                {order.items?.map((item, i) => (
                  <li key={i}>
                    {item.name} × {item.quantity} — ₹{item.price}
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