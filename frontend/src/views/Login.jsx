import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // This function updates form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // This function sends login request
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      sessionStorage.setItem("token", data.access_token);
      navigate("/");
    } else {
      alert(data.msg);
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">Excel2Report</h1>
      <p className="app-subtitle">Convert your Excel data into PDF charts</p>

      <h2>Login</h2>
      <input className="input" name="username" placeholder="Username" onChange={handleChange} />
      <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button className="button" onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;



