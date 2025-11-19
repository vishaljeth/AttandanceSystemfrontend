import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentDashboard() {
  const studentname = localStorage.getItem("name");
  const rollno = localStorage.getItem("rollno");

  const [attendanceData, setAttendanceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!rollno) return; // agar rollno missing ho to kuch na kare
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(`https://attandence-backend.vercel.app/attendance/${rollno}`);
        setAttendanceData(res.data || []);
      } catch (err) {
        console.error("Error fetching attendance:", err);
        setAttendanceData([]);
      }
    };

    fetchAttendance();
  }, [rollno]);

  const handleAttandence = () => {
    navigate("/QRscan");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };



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
        <h2>Welcome, {studentname || "student"} 👋</h2>

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
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.length > 0 ? (
              attendanceData.map((record, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {record.date || formatDate(record.createdAt) || "-"}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ccc",
                      padding: "8px",
                      color: record.status === "Present" ? "green" : "red",
                    }}
                  >
                    {record.status ? "Present" : "Absent"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{ textAlign: "center", padding: "8px" }}>
                  No records found
                </td>
              </tr>
            )}
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
        <button onClick={handleAttandence} className="btn5">
          Mark Attendance
        </button>
      </div>
    </div>
  );
}
