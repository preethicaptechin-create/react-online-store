import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Password reset link sent to your email 📧");
      setEmail("");
    } catch (err) {
      toast.error(err.message || "Failed to send reset link ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Forgot Password</h2>
        <p style={{ fontSize: "14px", marginBottom: "10px", color: "#555" }}>
          Enter your registered email. We’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Remember your password? <Link to="/login">Login</Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;