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
import WhyChooseUs from "./pages/WhyChooseUs.jsx"; // 👈 added page

// Components
import UserSubmitTool from "./components/UserSubmitTool.jsx"; // 👈 existing import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<ToolDetails />} />
        <Route path="/resume" element={<ResumeGenerator />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} /> {/* 👈 NEW */}

        {/* User routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/submit-tool" element={<UserSubmitTool />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/tools" element={<AdminTools />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer
        style={{
          textAlign: "center",
          padding: "20px 0",
          borderTop: "1px solid #e5e5e5",
          marginTop: "50px",
          color: "#555",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} AI-SaaS Marketplace. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
