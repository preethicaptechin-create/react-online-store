



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"; // ✅ import toast
// import "react-toastify/dist/ReactToastify.css";           // ✅ toast styles
// import "./Auth.css";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       const response = await fetch(`${API_URL}/api/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message);

//       // 🔥 Save token
   

//       // 🔥 Save user object for header dropdown
// // 🔥 Save access & refresh token
// localStorage.setItem("accessToken", data.accessToken);
// localStorage.setItem("refreshToken", data.refreshToken);

// // 🔥 Save user
// localStorage.setItem("user", JSON.stringify(data.user));
//       // ✅ Show success toast
//       toast.success("Login successful ✅", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//       });

//       // 🔥 Redirect to home after 3s
//       setTimeout(() => navigate("/"), 3000);

//     } catch (error) {
//       toast.error(error.message || "Login failed ❌", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div className="auth-page">
//       <div className="auth-box">
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p>
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>

//       {/* ✅ Toast container must be rendered */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁 toggle state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Email or password is incorrect ❌");

      // 🔥 Save access & refresh tokens + user
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Show success toast
      toast.success("Login successful ✅", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });

      // 🔥 Redirect to home after 3s
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      // ✅ Show error toast for mismatch
      toast.error(error.message || "Login failed ❌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          {/* 👁 Password input with show/hide */}
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;