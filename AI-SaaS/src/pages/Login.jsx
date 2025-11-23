// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, form);

      const userData = res.data.user;
      const token = res.data.token;

      // Save token & user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setMsg("Login successful!");

      setTimeout(() => {
        if (userData.role === "admin") navigate("/admin/dashboard");
        else navigate("/dashboard");
      }, 800);

    } catch (err) {
      setMsg(err.response?.data?.msg || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <h2>Welcome Back</h2>
      <p style={{ textAlign: "center", color: "#737373", marginBottom: "32px", fontSize: "15px" }}>
        Sign in to access your dashboard and tools
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit">Login</button>
      </form>

      {msg && (
        <p
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center",
            background: msg.includes("success") ? "#43e97b20" : "#ef444420",
            color: msg.includes("success") ? "#059669" : "#dc2626",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {msg}
        </p>
      )}

      <p style={{ marginTop: "24px", textAlign: "center", color: "#737373", fontSize: "14px" }}>
        Don't have an account?{" "}
        <a href="/register" style={{ color: "#667eea", fontWeight: "600", textDecoration: "none" }}>
          Sign up
        </a>
      </p>
    </div>
  );
}
