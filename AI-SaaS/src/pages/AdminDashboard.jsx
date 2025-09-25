// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.role !== "admin") {
        navigate("/dashboard"); // redirect non-admins
      } else {
        setUser(parsedUser);
      }
    } else {
      navigate("/login");
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <div style={{ marginTop: "30px" }}>
        <h3>Quick Actions</h3>
        <ul>
          <li>
            <a href="/admin/tools">Manage AI Tools</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

