import React from "react";

export default function About() {
  const userLoggedIn = localStorage.getItem("user");
  return (
    <div className="about-container">
      
      {/* Header Section */}
      <div className="about-header">
        <h1>About Us</h1>
        {userLoggedIn ? <p>user is logged in</p>: <p>user is not logged in</p>}
        <p>
          Welcome to our Attendance System! Our goal is to make attendance tracking
          simple, reliable, and transparent for both students and admins.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features-cards">
          
          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/100/1e40af/attendance.png" alt="Attendance" />
            <h3>Easy Attendance</h3>
            <p>Intuitive UI to track attendance efficiently.</p>
          </div>

          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/100/1e40af/admin-settings-male.png" alt="Admin" />
            <h3>Admin Friendly</h3>
            <p>Manage classes, students, and reports easily.</p>
          </div>

          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/100/1e40af/secure-file-transfer.png" alt="Security" />
            <h3>Secure & Transparent</h3>
            <p>Data is secure and updates are real-time.</p>
          </div>

          <div className="feature-card">
            <img src="https://img.icons8.com/ios-filled/100/1e40af/graph.png" alt="Analytics" />
            <h3>Analytics</h3>
            <p>Visualize attendance trends and reports easily.</p>
          </div>

        </div>
      </div>

      {/* Footer / Conclusion */}
      <div className="about-footer">
        <p>
          Our Attendance System provides a smooth, reliable, and professional solution for schools and colleges.
        </p>
      </div>

    </div>
  );
}
