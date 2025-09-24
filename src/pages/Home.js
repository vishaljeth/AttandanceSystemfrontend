import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {

  const navigate = useNavigate();
  const gotologin =() =>{
    navigate("/Student-signup");
  
  }
  const gotologin2 =() =>{
    navigate("/Adminsignup");
  
  }
  return (
    <div className="home-main">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-left">
          <h1>Welcome to Attendance System</h1>
          <p>
            A smart and easy way to manage student attendance for schools and
            colleges. Secure login for both students and admins.
          </p>
          <div className="home-buttons">
            <button className="btn student" onClick={gotologin}>Student login</button>
            <button className="btn admin"onClick={gotologin2}   style={{ color: "black" }}
>Admin signup</button>
          </div>
        </div>

        <div className="home-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4762/4762310.png"
            alt="attendance"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2>Why Choose Us?</h2>
        <div className="home-feature-container">
          <div className="home-card">
            <h3>📊 Easy Tracking</h3>
            <p>Track attendance in real-time with secure records.</p>
          </div>
          <div className="home-card">
            <h3>🔐 Secure Login</h3>
            <p>Separate portals for students and administrators.</p>
          </div>
          <div className="home-card">
            <h3>⚡ Fast & Reliable</h3>
            <p>Quick login and accurate reporting system.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
