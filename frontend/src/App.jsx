import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Reports from "./views/Reports.jsx";
import Upload from "./views/Upload.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <Reports /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default App;
