import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Upload from "./views/Upload.jsx";
import Weather from "./views/Weather.jsx";
import "./styles.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  </BrowserRouter>
);


