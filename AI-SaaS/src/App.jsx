import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import ToolDetails from "./pages/ToolDetails.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ResumeGenerator from "./pages/ResumeGenerator.jsx";
import AdminTools from "./pages/AdminTools.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Profile from "./pages/Profile.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import MyTools from "./pages/MyTools.jsx";

// Components
import UserSubmitTool from "./components/UserSubmitTool.jsx";

// AI Tools Pages
import ImageGenerator from "./tools/ImageGenerator.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ----------------------------- */}
        {/* Public Routes */}
        {/* ----------------------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<ToolDetails />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />

        {/* ----------------------------- */}
        {/* Tool Pages */}
        {/* ----------------------------- */}
        <Route path="/tools/image-generator" element={<ImageGenerator />} />

        {/* ----------------------------- */}
        {/* Auth Routes */}
        {/* ----------------------------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ----------------------------- */}
        {/* User Protected Routes */}
        {/* ----------------------------- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/my-tools"
          element={
            <ProtectedRoute>
              <MyTools />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/submit-tool"
          element={
            <ProtectedRoute>
              <UserSubmitTool />
            </ProtectedRoute>
          }
        />

        {/* ----------------------------- */}
        {/* Admin Protected Routes */}
        {/* ----------------------------- */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/tools"
          element={
            <AdminRoute>
              <AdminTools />
            </AdminRoute>
          }
        />

        {/* Resume */}
        <Route path="/resume" element={<ResumeGenerator />} />
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />

      {/* ----------------------------- */}
      {/* Footer */}
      {/* ----------------------------- */}
      <footer
        style={{
          background: "#141b2d",
          padding: "40px 40px 24px",
          borderTop: "1px solid #334155",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "32px",
          }}
        >
          {/* Brand Section */}
          <div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-SaaS
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Discover and access powerful AI tools for creativity, business, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "white",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Home", "Tools", "Why Choose Us", "Submit Tool"].map((link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#667eea")}
                    onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "16px",
                color: "white",
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link} style={{ marginBottom: "8px" }}>
                  <a
                    href="#"
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                    onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "24px",
            borderTop: "1px solid #334155",
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} AI-SaaS Marketplace. All rights reserved.
        </div>
      </footer>
    </Router>
  );
}

export default App;
