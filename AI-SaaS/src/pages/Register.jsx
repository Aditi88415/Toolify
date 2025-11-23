// src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, { name, email, password });
      setMsg(res.data.msg);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMsg(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="register">
      <h2>Create Account</h2>
      <p style={{ textAlign: "center", color: "#737373", marginBottom: "32px", fontSize: "15px" }}>
        Join thousands of users discovering AI tools
      </p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password (min. 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit">Create Account</button>
      </form>

      {msg && (
        <p
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "8px",
            textAlign: "center",
            background: msg.toLowerCase().includes("success") ? "#43e97b20" : "#ef444420",
            color: msg.toLowerCase().includes("success") ? "#059669" : "#dc2626",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {msg}
        </p>
      )}

      <p style={{ marginTop: "24px", textAlign: "center", color: "#737373", fontSize: "14px" }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "#667eea", fontWeight: "600", textDecoration: "none" }}>
          Sign in
        </a>
      </p>
    </div>
  );
}
