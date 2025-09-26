import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Adminsignup() {

  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
    department: "", // extra field
    userType: "admin",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/adminregister",
        admin,
      );
      alert("Admin registered successfully");
      navigate("/login");
      console.log("Admin Signup Data:", response.data);
    } catch (error) {
      console.error("Admin Signup error:", error.response?.data || error.message);
      alert("Error: " + (error.response?.data?.msg || error.message));
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Admin Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={admin.name}
            onChange={handleInput}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={admin.email}
            onChange={handleInput}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleInput}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={admin.department}
            onChange={handleInput}
          />

          <button type="submit">Signup</button>
          
        </form>
      </div>
    </div>
  );
}
