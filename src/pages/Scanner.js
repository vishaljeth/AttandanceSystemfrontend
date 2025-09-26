import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Scanner() {
  const [qrValue, setQrValue] = useState("");
  const [showQR, setShowQR] = useState(false);

  const generateQR = () => {
    // unique value ke liye current time use karte hain
    const uniqueValue = `Attendance-${new Date().toLocaleString()}`;
    setQrValue(uniqueValue);
    setShowQR(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Admin QR Generator</h2>
      <button
        onClick={generateQR}
     className="btn6"
      >
        Generate QR
      </button>

      {showQR && (
        <div>
          <h3>QR Code</h3>
          <QRCodeSVG value={qrValue} size={200} />
          <p>{qrValue}</p>
        </div>
      )}
    </div>
  );
}
