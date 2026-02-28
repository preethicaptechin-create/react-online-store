import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Menu,
} from "lucide-react"; // npm install lucide-react
import "./AdminLayout.css";

const AdminLayout = ({ onLogout }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    if (window.confirm("Confirm logout?")) {
      localStorage.removeItem("adminToken");
      onLogout();
      navigate("/admin-login");
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={`admin-container ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/admin/products" className={({ isActive }) => (isActive ? "active" : "")}>
            <Package size={20} /> Products
          </NavLink>
          <NavLink to="/admin/orders" className={({ isActive }) => (isActive ? "active" : "")}>
            <ShoppingCart size={20} /> Orders
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "active" : "")}>
            <Users size={20} /> Users
          </NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => (isActive ? "active" : "")}>
            <Settings size={20} /> Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Panel</h1>
        </header>
        <div className="admin-content">
          <Outlet /> {/* Dashboard / Products / Orders will render here */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;