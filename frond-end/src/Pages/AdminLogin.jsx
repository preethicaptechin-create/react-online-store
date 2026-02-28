// import React, { useState } from "react";
// import axios from "axios";

// const AdminLogin = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");
//   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/admin/login", { username, password });
// //       const token = res.data.token;
// //       localStorage.setItem("adminToken", token); // store token
// //       onLogin(); // update App.jsx state
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.response?.data?.message || "Login failed");
// //     }
// //   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError(""); // clear previous error

//   try {
//     const res = await axios.post("http://localhost:5000/api/admin/login", {
//       username,
//       password,
//       role,
//     });

//     const { token } = res.data;
//     localStorage.setItem("adminToken", token);
//     onLogin(); // success callback
//   } catch (err) {
//     console.error("Login error:", err.response?.data); // ← more detail in console
//     const msg = err.response?.data?.message || "Login failed. Check console.";
//     setError(msg);
//   }
// };

//   return (
//     <div>
//       <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Username" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//            <input 
//           type="role" 
//           placeholder="Role" 
//           value={role} 
//           onChange={(e) => setRole(e.target.value)} 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{color:"red"}}>{error}</p>}
//     </div>
//   );
// };

// export default AdminLogin;





// import React, { useState } from "react";
// import axios from "axios";
// import "./AdminLogin.css"; // import CSS file

// const AdminLogin = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // clear previous error

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         username,
//         password,
//         role,
//       });

//       const { token } = res.data;
//       localStorage.setItem("adminToken", token);
//       setIsLoggedIn(true);
//       onLogin(); // success callback
//     } catch (err) {
//       console.error("Login error:", err.response?.data);
//       const msg = err.response?.data?.message || "Login failed. Check console.";
//       setError(msg);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     setIsLoggedIn(false);
//     setUsername("");
//     setPassword("");
//     setRole("");
//     onLogin();
//   };

//   return (
//     <div className="login-container">
//       {!isLoggedIn ? (
//         <>
//           <h1>Admin Login</h1>
//           <form onSubmit={handleSubmit} className="login-form">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 className="show-hide-btn"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             <input
//               type="text"
//               placeholder="Role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//             />
//             <button type="submit" className="login-btn">Login</button>
//           </form>
//           {error && <p className="error-msg">{error}</p>}
//         </>
//       ) : (
//         <div className="logout-section">
//           <h2>Welcome, {username}!</h2>
//           <p>Role: {role}</p>
//           <button onClick={handleLogout} className="logout-btn">Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminLogin;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css";

// const AdminLogin = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         username,
//         password,
//         role,
//       });

//       const { token } = res.data;
//       localStorage.setItem("adminToken", token);

//       onLogin(); // update App.jsx state
//       navigate("/admin/dashboard"); // redirect to admin dashboard
//     } catch (err) {
//       console.error("Login error:", err.response?.data);
//       const msg = err.response?.data?.message || "Login failed";
//       setError(msg);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <div className="password-wrapper">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="show-hide-btn"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>
//         <input
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         />
//         <button type="submit" className="login-btn">
//           Login
//         </button>
//       </form>
//       {error && <p className="error-msg">{error}</p>}
//     </div>
//   );
// };

// export default AdminLogin;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./AdminLogin.css";

// const AdminLogin = ({ onLogin }) => {
//   const [username, setUsername] = useState(""); // or email
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // role field
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email: username, // or username depending on backend
//         password,
//         role,           // include role
//       });

//       const { token } = res.data;
//       if (!token) throw new Error("Token not received from server");

//       // Save token in localStorage and App state
//       localStorage.setItem("adminToken", token);
//       onLogin(token); // pass token to App state

//       // Redirect to admin dashboard
//       navigate("/admin/dashboard/products");
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err.message);
//       const msg = err.response?.data?.message || err.message || "Login failed";
//       setError(msg);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Admin Login</h1>
//       <form onSubmit={handleSubmit} className="login-form">
//         <input
//           type="name"
//           placeholder="name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <div className="password-wrapper">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="button"
//             className="show-hide-btn"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>
//         <input
//           type="text"
//           placeholder="Role (e.g., admin)"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         />
//         <button type="submit" className="login-btn">
//           Login
//         </button>
//       </form>
//       {error && <p className="error-msg">{error}</p>}
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // default to "admin"
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Very important: log exactly what you're sending
    console.log("Sending login data:", {
      username,
      password: "••••••", // don't log real password
      role,
    });

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        username,     // ← sending as username
        password,
        role,
      });

      const { token } = res.data;

      if (!token) {
        throw new Error("No token received from server");
      }

      console.log("Login successful - token received");

      localStorage.setItem("adminToken", token);
      onLogin(); // or onLogin(token) if your App needs it

      navigate("/admin/dashboard"); // or /admin/products — your choice

      // Optional success message
      alert("Login successful!");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);

      let errorMessage = "Login failed. Please try again.";

      if (err.response) {
        if (err.response.status === 401) {
          errorMessage = err.response.data?.message || "Invalid username or password";
        } else if (err.response.status === 400) {
          errorMessage = err.response.data?.message || "Missing fields";
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          required
          disabled={loading}
          autoFocus
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="button"
            className="show-hide-btn"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <input
          type="text"
          placeholder="Role (usually 'admin')"
          value={role}
          onChange={(e) => setRole(e.target.value.trim())}
          required
          disabled={loading}
        />

        <button
          type="submit"
          className="login-btn"
          disabled={loading || !username || !password || !role}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p className="error-msg" style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;