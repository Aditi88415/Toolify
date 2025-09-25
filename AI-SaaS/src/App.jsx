// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

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

// Components
import UserSubmitTool from "./components/UserSubmitTool.jsx"; // 👈 new import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<ToolDetails />} />
        <Route path="/resume" element={<ResumeGenerator />} /> {/* ✅ fixed */}

        {/* User routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-tool" element={<UserSubmitTool />} /> {/* 👈 new */}

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/tools" element={<AdminTools />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} AI-SaaS Marketplace. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
