import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // This function updates form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // This function sends registration request
  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      alert("User registered");
      navigate("/login");
    } else {
      alert(data.msg);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input className="input" name="username" placeholder="Username" onChange={handleChange} />
      <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button className="button" onClick={handleRegister}>Register</button>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;


