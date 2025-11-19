import React, { useState } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
import {toast} from 'react-toastify';


export default function QRScan() {
  const [data, setData] = useState("No result");

  const handleScan = async (result) => {
    if (result) {
      setData(result);
      console.log("Scanned QR:", result);

      try {
        const name = localStorage.getItem("name");
        const rollno = localStorage.getItem("rollno") 
        const response = await axios.post("https://attandence-backend.vercel.app/attandance", {
          name: name,
          rollno: rollno
        });
        console.log(response.data); // attendance marked message
        toast.success("attandance marked for today")
      } catch (err) {
        console.error(err);
        alert("Error marking attendance");
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>QR Scanner</h2>
      <div style={{ width: "300px", margin: "auto" }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment" // 👈 BACK CAMERA
          style={{ width: "100%" }}
        />
      </div>
      <p>Scanned Data: {data}</p>
    </div>
  );
}
