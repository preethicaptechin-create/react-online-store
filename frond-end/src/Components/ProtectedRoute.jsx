// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check token

  if (!token) {
    return <Navigate to="/login" />; // token illa na redirect
  }

  return children; // token iruntha access allow
};

export default ProtectedRoute;