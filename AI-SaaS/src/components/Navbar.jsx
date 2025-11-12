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
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* ✅ Logo Section */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img
            src="/images/tt.png"
            alt="AI-SaaS Logo"
            className="logo-img"
          />
          <span className="logo-text">AI-SaaS</span>
        </Link>
      </div>

      {/* ✅ Navigation Links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/why-choose-us">Why Choose Us</Link></li> {/* 👈 NEW PAGE LINK */}

        {user ? (
          <>
            <li>
              <Link to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}>
                {user.name}'s Dashboard
              </Link>
            </li>
            {user.role === "admin" && (
              <li><Link to="/admin/tools">Admin</Link></li>
            )}
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>

      <style jsx="true">{`
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          padding: 15px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* ✅ Logo Styling */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-img {
          height: 70px; /* 🔥 Bigger Logo */
          width: 70px;
          border-radius: 12px;
          object-fit: contain;
        }

        .logo-text {
          font-size: 26px;
          font-weight: 700;
          color: #1dbf73;
          margin-left: 10px;
          letter-spacing: 0.5px;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .navbar ul li a {
          text-decoration: none;
          color: #444;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .navbar ul li a:hover {
          color: #1dbf73;
        }

        .logout-btn {
          background: #1dbf73;
          color: #fff;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .logout-btn:hover {
          background: #17a563;
        }
      `}</style>
    </nav>
  );
}
