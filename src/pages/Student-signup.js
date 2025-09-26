import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function StudentSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollno: "",
    userType: "Student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        "https://attandence-backend.vercel.app/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Student Signup Data:", res.data);
      toast.success("Signup successful!");
      navigate("/studentLogin"); // redirect to login page
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      toast.error(err.response?.data?.msg || "Signup failed!");
    }
  };

  return (
    <div className="signup-container" style={{ padding: "20px" }}>
      <div className="signup-box" style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "#f9f9f9"
        }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Student Signup</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Roll Number", name: "rollno", type: "text" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" },
          ].map((field) => (
            <div className="form-group" key={field.name} style={{ marginBottom: "15px" }}>
              <label>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                value={formData[field.name]}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>
          ))}

          <button
            type="submit"
            className="signup-btn"
            style={{
              width: "100%",
              padding: "10px",
              background: "#4b7bec",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
