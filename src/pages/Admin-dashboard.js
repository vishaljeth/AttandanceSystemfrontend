import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [attendanceData, setAttendanceData] = useState([]);
  // const [dashboardData, setDashboardData] = useState([]);

  // // Clear data on button click
  // const handleClear = () => {
  //   setDashboardData([]); // clears frontend data
  // };
  

  const AdminName = localStorage.getItem("name");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get("https://attandence-backend.vercel.app/attandance");
        setAttendanceData(res.data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };

    fetchAttendance(); 

    const interval = setInterval(fetchAttendance, 2000);

    return () => clearInterval(interval); 
  }, []);

  const navigate = useNavigate();
  const handleQR = () => {
    navigate("/scanner");
  };

  return (
    <div className="dashboard-container">
      {/* Internal CSS */}
      <style>
        {`
        .dashboard-container {
          padding: 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: #f5f6fa;
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px 20px;
          background: #4b7bec;
          color: white;
          border-radius: 8px;
        }

        .dashboard-main {
          display: flex;
          gap: 20px;
        }

        .attendance-table-container {
          flex: 3;
          overflow-x: auto;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .attendance-table {
          width: 100%;
          border-collapse: collapse;
        }

        .attendance-table th,
        .attendance-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: center;
        }

        .attendance-table th {
          background: #f2f2f2;
          font-weight: 600;
        }

        .attendance-table tr:hover {
          background-color: #f1f2f6;
        }

        .no-data {
          text-align: center;
          padding: 20px;
          color: #888;
        }

        .charts-container {
          flex: 2;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        `}
      </style>

      {/* Header */}
      <header className="dashboard-header">
        <h2>Welcome {AdminName || "Admin"}</h2>
        <button onClick={handleQR} className="btn6">Generate QR</button>
      </header>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Left: Attendance Table */}
        <div className="attendance-table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="no-data">
                    No attendance marked yet.
                  </td>
                </tr>
              ) : (
                attendanceData.map((att) => (
                  <tr key={att._id}>
                    <td>{att.name}</td>
                    <td>{att.rollno}</td>
                    <td>{new Date(att.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>


        {/* Right: Charts Placeholder */}
        <div className="charts-container">
          <h3>Attendance Analytics</h3>
          <p>Charts in working...</p>
        </div>
      </div>
    </div>
  );
}
