import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const attendanceData = [
    { date: "2025-09-15", status: "Present" },
    { date: "2025-09-16", status: "Absent" },
    { date: "2025-09-17", status: "Present" },
    { date: "2025-09-18", status: "Present" },
    { date: "2025-09-19", status: "Present" },
  ];
  const navigate = useNavigate();
  const handleAttandence = ()=>{
    navigate("/QRscan")
  }
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      {/* Left side */}
      <div
        style={{
          flex: 1,
          background: "#f4f6f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Welcome, Student 👋</h2>

        <h3 style={{ marginTop: "20px" }}>Last 5 Days Attendance</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ background: "#ddd" }}>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Date
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {record.date}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    color: record.status === "Present" ? "green" : "red",
                  }}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right side */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Attendance Chart 📊</h2>
        <p>work in progress......</p>
      </div>
      <div>
        <button onClick={handleAttandence}>Mark Attendance</button>
      </div>
    </div>
  );
}
