



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"; // ✅ import toast
// import "react-toastify/dist/ReactToastify.css";           // ✅ toast styles
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

//       // ✅ Show success toast
//       toast.success("Registration successful ✅", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//       });

//       // 🔥 Redirect to login page after 3 seconds
//       setTimeout(() => navigate("/login"), 3000);

//     } catch (error) {
//       // ✅ Show error toast
//       toast.error(error.message || "Registration failed ❌", {
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
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>

//       {/* ✅ Toast container must be rendered */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
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
//   const [showPassword, setShowPassword] = useState(false); // 👁 toggle state

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Validation Function
//   const validateForm = () => {
//     const nameRegex = /^[A-Za-z ]{3,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//     if (!nameRegex.test(formData.name)) {
//       toast.error(
//         "Name must be at least 3 letters and contain only alphabets."
//       );
//       return false;
//     }

//     if (!emailRegex.test(formData.email)) {
//       toast.error("Please enter a valid email address.");
//       return false;
//     }

//     if (!passwordRegex.test(formData.password)) {
//       toast.error(
//         "Password must be 8+ characters with uppercase, lowercase, number & special character."
//       );
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return; // 🔥 validation check

//     try {
//       setIsSubmitting(true);

//       const response = await fetch(`${API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message);

//       toast.success("Registration successful ✅", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       setTimeout(() => navigate("/login"), 3000);
//     } catch (error) {
//       toast.error(error.message || "Registration failed ❌", {
//         position: "top-right",
//         autoClose: 3000,
//       });
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

//           {/* 👁 Password with Toggle */}
//           <div style={{ position: "relative" }}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               required
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: "14px",
//               }}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </span>
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
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
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // ✅ Validation Regex
//   // const nameRegex = /^[A-Za-z ]{3,}$/;
//   // const nameRegex = /^[A-Za-z][A-Za-z ]{2,}$/;
//   const nameRegex = /^[A-Za-z]\.? ?[A-Za-z][A-Za-z ]{1,}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//   const validateField = (name, value) => {
//     switch (name) {
//       case "name":
//         if (!nameRegex.test(value)) return "Name must be at least 3 letters and only alphabets.";
//         break;
//       case "email":
//         if (!emailRegex.test(value)) return "Enter a valid email address.";
//         break;
//       case "password":
//         if (!passwordRegex.test(value))
//           return "Password must be 8+ chars with uppercase, lowercase, number & special char.";
//         break;
//       default:
//         return "";
//     }
//     return "";
//   };

//   // ✅ Real-time validation on change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });

//     // validate field immediately
//     const errorMessage = validateField(name, value);
//     setErrors({ ...errors, [name]: errorMessage });
//   };

//   // ✅ Disable submit if any field has error or is empty
//   const isFormValid = () =>
//     formData.name &&
//     formData.email &&
//     formData.password &&
//     !errors.name &&
//     !errors.email &&
//     !errors.password;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // final check
//     if (!isFormValid()) {
//       toast.error("Please fix errors before submitting!");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const response = await fetch(`${API_URL}/api/auth/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message);

//       toast.success("Registration successful ✅", { position: "top-right", autoClose: 3000 });

//       setTimeout(() => navigate("/login"), 3000);
//     } catch (error) {
//       toast.error(error.message || "Registration failed ❌", { position: "top-right", autoClose: 3000 });
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
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           {errors.name && <small className="error">{errors.name}</small>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <small className="error">{errors.email}</small>}

//           <div style={{ position: "relative" }}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 fontSize: "14px",
//               }}
//             >
//               {showPassword ? "🙈" : "👁"}
//             </span>
//           </div>
//           {errors.password && <small className="error">{errors.password}</small>}

//           <button type="submit" disabled={isSubmitting || !isFormValid()}>
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  // ✅ Validation Regex
  const nameRegex = /^[A-Za-z]\.? ?[A-Za-z][A-Za-z ]{1,}$/;
  const lastNameRegex = /^[A-Za-z]\.? ?[A-Za-z][A-Za-z ]{1,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // ✅ Field Validation
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (!nameRegex.test(value)) return "First name must be at least 2 letters and alphabets only.";
        break;
      case "lastName":
        if (!lastNameRegex.test(value)) return "Last name must be at least 2 letters and alphabets only.";
        break;
      case "email":
        if (!emailRegex.test(value)) return "Enter a valid email address.";
        break;
      case "password":
        if (!passwordRegex.test(value))
          return "Password must be 8+ chars with uppercase, lowercase, number & special char.";
        break;
      default:
        return "";
    }
    return "";
  };

  // ✅ Real-time validation on change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // validate field immediately
    const errorMessage = validateField(name, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  // ✅ Disable submit if any field has error or is empty
  const isFormValid = () =>
    formData.name &&
    formData.lastName &&
    formData.email &&
    formData.password &&
    !errors.name &&
    !errors.lastName &&
    !errors.email &&
    !errors.password;

  // ✅ Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fix errors before submitting!");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      toast.success("Registration successful ✅", { position: "top-right", autoClose: 3000 });

      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      toast.error(error.message || "Registration failed ❌", { position: "top-right", autoClose: 3000 });
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
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <small className="error">{errors.lastName}</small>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
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
          {errors.password && <small className="error">{errors.password}</small>}

          <button type="submit" disabled={isSubmitting || !isFormValid()}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;