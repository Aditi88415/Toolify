// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/" style={{ textDecoration: "none", color: "#1dbf73" }}>
          AI-SaaS
        </Link>
      </h2>



      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>

        {user ? (
          <>
            <li>
              <Link to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}>
                {user.name}'s Dashboard
              </Link>
            </li>
            {user.role === "admin" && <li><Link to="/admin/tools">Admin</Link></li>}
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
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          gap: 20px;
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
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .logout-btn:hover {
          background: #17a563;
        }
        .search-form {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .search-form input {
          padding: 6px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .search-form button {
          background: #1dbf73;
          color: #fff;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .search-form button:hover {
          background: #17a563;
        }
      `}</style>
    </nav>
  );
}
