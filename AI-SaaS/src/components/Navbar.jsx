// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* 🔥 Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="/images/to.png" alt="AI-SaaS Logo" className="logo-img" />
          <span className="logo-text">AI-SaaS</span>
        </Link>
      </div>

      {/* 🔗 Navigation */}
      <ul>
        {/* 👤 PUBLIC USER LINKS (HIDDEN FOR ADMIN) */}
        {!(user && user.role === "admin") && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>

            {/* ⭐ Submit Tool only for logged in users */}
            {user && <li><Link to="/submit-tool">Submit Tool</Link></li>}
          </>
        )}

        {/* 🔐 LOGGED IN USER / ADMIN */}
        {user ? (
          <>
            {/* 🧑 Go to correct dashboard */}
            <li>
              <Link to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}>
                {user.name.split(" ")[0]}'s Dashboard
              </Link>
            </li>

            {/* 🛠 Admin only link */}
            {user.role === "admin" && (
              <li><Link to="/admin/tools">Manage Tools</Link></li>
            )}

            {/* 🚪 Logout Button */}
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {/* 🔓 If NOT logged in */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
