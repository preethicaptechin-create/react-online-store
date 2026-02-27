import React, { useState } from "react";
import axios from "axios";

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
  const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", { username, password });
//       const token = res.data.token;
//       localStorage.setItem("adminToken", token); // store token
//       onLogin(); // update App.jsx state
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // clear previous error

  try {
    const res = await axios.post("http://localhost:5000/api/admin/login", {
      username,
      password,
      role,
    });

    const { token } = res.data;
    localStorage.setItem("adminToken", token);
    onLogin(); // success callback
  } catch (err) {
    console.error("Login error:", err.response?.data); // ← more detail in console
    const msg = err.response?.data?.message || "Login failed. Check console.";
    setError(msg);
  }
};

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
           <input 
          type="role" 
          placeholder="Role" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
};

export default AdminLogin;