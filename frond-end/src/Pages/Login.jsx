// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     emailOrPhone: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     emailOrPhone: '',
//     password: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { emailOrPhone: '', password: '' };

//     if (!formData.emailOrPhone.trim()) {
//       newErrors.emailOrPhone = 'Email or Phone is required';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validateForm()) return;

//   try {
//     setIsSubmitting(true);

//     const response = await fetch(
//       "http://localhost:5000/api/auth/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: formData.emailOrPhone,   // backend expects "email"
//           password: formData.password,
//         }),
//       }
//     );

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message);
//     }

//     // ✅ Save JWT token
//     localStorage.setItem("token", data.token);

//     alert("Login successful ✅");
//     navigate("/");

//   } catch (error) {
//     alert(error.message || "Login failed ❌");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Login</h2>
//         <p>Welcome back! Please enter your details.</p>

//         <form onSubmit={handleSubmit} noValidate>
//           <div className="input-group">
//             <label>Email or Phone</label>
//             <input
//               type="text"
//               name="emailOrPhone"
//               placeholder="example@email.com or 9876543210"
//               value={formData.emailOrPhone}
//               onChange={handleChange}
//               className={errors.emailOrPhone ? 'input-error' : ''}
//             />
//             {errors.emailOrPhone && (
//               <span className="error-text">{errors.emailOrPhone}</span>
//             )}
//           </div>

//           <div className="input-group password-group">
//             <label>Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={errors.password ? 'input-error' : ''}
//               />
//               <span
//                 className="show-hide"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </span>
//             </div>
//             {errors.password && (
//               <span className="error-text">{errors.password}</span>
//             )}
//           </div>

//           <div className="options">
//             <label className="remember">
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <Link to="/forgot-password" className="forgot">
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="login-button"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { emailOrPhone: "", password: "" };

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or Phone is required";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.emailOrPhone, // backend expects email
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save token
      localStorage.setItem("token", data.token);

      // Optional: Save user data
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      alert("Login successful ✅");
      navigate("/");
    } catch (error) {
      alert(error.message || "Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <p>Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label>Email or Phone</label>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="example@email.com"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className={errors.emailOrPhone ? "input-error" : ""}
            />
            {errors.emailOrPhone && (
              <span className="error-text">{errors.emailOrPhone}</span>
            )}
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />
              <span
                className="show-hide"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
