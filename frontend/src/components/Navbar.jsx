import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Simple navigation bar
const Navbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  // Remove token and redirect to login
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#cce5ff",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        borderBottom: "2px solid #99c",
        marginBottom: "20px",
        fontWeight: "bold",
      }}
    >
      <Link to="/">Home</Link>
      {!token && <Link to="/login">Login</Link>}
      {!token && <Link to="/register">Register</Link>}
      {token && <Link to="/upload">Upload</Link>}
      {token && (
        <button onClick={handleLogout} style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}>
          Logout
        </button>
      )}
      <Link to="/weather">Weather</Link>
    </nav>
  );
};

export default Navbar;

