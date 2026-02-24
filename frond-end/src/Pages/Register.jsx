// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css"; // same styling use pannalam

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       setIsSubmitting(true);

//       const response = await fetch(`${API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message);
//       }

//       alert("Registration successful ✅");
//       navigate("/login");

//     } catch (error) {
//       alert(error.message || "Registration failed ❌");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Register</h2>
//         <p>Create your account</p>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <span className="error-text">{errors.name}</span>}
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="example@email.com"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <span className="error-text">{errors.email}</span>}
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && (
//               <span className="error-text">{errors.password}</span>
//             )}
//           </div>

//           <button type="submit" className="login-button" disabled={isSubmitting}>
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p style={{ marginTop: "15px" }}>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Auth.css";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
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

//       const response = await fetch(`${API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message);

//       alert("Registration successful ✅");

//       // 🔥 Redirect to login page
//       navigate("/login");

//     } catch (error) {
//       alert(error.message || "Registration failed ❌");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-box">
//         <h2>Create Account</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             onChange={handleChange}
//             required
//           />

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
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p>
//           Already have an account?
//           <Link to="/login"> Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // ✅ import toast
import "react-toastify/dist/ReactToastify.css";           // ✅ toast styles
import "./Auth.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      // ✅ Show success toast
      toast.success("Registration successful ✅", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });

      // 🔥 Redirect to login page after 3 seconds
      setTimeout(() => navigate("/login"), 3000);

    } catch (error) {
      // ✅ Show error toast
      toast.error(error.message || "Registration failed ❌", {
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
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/* ✅ Toast container must be rendered */}
      <ToastContainer />
    </div>
  );
};

export default Register;