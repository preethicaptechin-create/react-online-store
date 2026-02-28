// import React, { useState } from "react";
// import AdminProducts from "./AdminProducts"; // Your products component
// import AdminOrders from "./AdminOrder"; // Your orders component
// import "./AdminDashboard.css"

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("products"); // default tab

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Dashboard</h1>

//       {/* Tabs */}
//       <div style={{ marginBottom: "20px" }}>
//         <button
//           onClick={() => setActiveTab("products")}
//           style={{
//             marginRight: "10px",
//             padding: "10px 20px",
//             backgroundColor: activeTab === "products" ? "#4CAF50" : "#ddd",
//             color: activeTab === "products" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Products
//         </button>
//         <button
//           onClick={() => setActiveTab("orders")}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: activeTab === "orders" ? "#4CAF50" : "#ddd",
//             color: activeTab === "orders" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Orders
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div>
//         {activeTab === "products" && <AdminProducts />}
//         {activeTab === "orders" && <AdminOrders />}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard-container" style={{ padding: "20px" }}>
//       <h1>Admin Dashboard</h1>

//       {/* Dashboard navigation tabs */}
//       <div className="admin-dashboard-tabs" style={{ marginBottom: "20px" }}>
//         <NavLink
//           to="products"   // relative route!
//           className={({ isActive }) =>
//             isActive ? "tab-button active" : "tab-button"
//           }
//         >
//           Products
//         </NavLink>
//         <NavLink
//           to="orders"     // relative route!
//           className={({ isActive }) =>
//             isActive ? "tab-button active" : "tab-button"
//           }
//         >
//           Orders
//         </NavLink>
//       </div>

//       {/* Nested route content will render here */}
//       <div className="admin-dashboard-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const location = useLocation();

  return (
    <div className="admin-dashboard-container" style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Dashboard navigation tabs */}
      <div className="admin-dashboard-tabs" style={{ marginBottom: "20px" }}>
        <NavLink
          to="products" // relative route
          end // ensures "products" link is active only on exact match
          className={({ isActive }) =>
            isActive ? "tab-button active" : "tab-button"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="orders" // relative route
          className={({ isActive }) =>
            isActive ? "tab-button active" : "tab-button"
          }
        >
          Orders
        </NavLink>
      </div>

      {/* Nested route content */}
      <div className="admin-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;