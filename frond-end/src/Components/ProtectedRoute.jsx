// // ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token"); // check token

//   if (!token) {
//     return <Navigate to="/login" />; // token illa na redirect
//   }

//   return children; // token iruntha access allow
// };

// export default ProtectedRoute;


// ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      let accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken && !refreshToken) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      try {
        // ✅ Try accessing protected route with access token
        await axios.get(`${API_URL}/api/protected`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setIsAuth(true);
      } catch (error) {
        // 🔄 Access token invalid / expired → try refresh
        if (refreshToken) {
          try {
            const response = await axios.post(`${API_URL}/api/refresh-token`, {
              token: refreshToken,
            });
            localStorage.setItem("accessToken", response.data.accessToken);
            setIsAuth(true);
          } catch (refreshError) {
            console.log("Refresh token failed:", refreshError);
            setIsAuth(false);
          }
        } else {
          setIsAuth(false);
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!isAuth) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;