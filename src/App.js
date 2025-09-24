import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   
import "./App.css";   
import Navbar from "./Components/Navbar";
import StudentSignup from "./pages/Student-signup";
import About from "./pages/About";
import StudentLogin from "./pages/StudentLogin";
import Scanner from "./pages/Scanner";
import QRScan from "./pages/QRScan";
import Studentdashboard from './pages/Studentdashboard';
import Adminsignup from './pages/Admin-signup';
import AdminDashboard from "./pages/Admin-dashboard";

// ✅ Toastify import karo
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  

export default function App() {
  const [isLogin,setIsLogin] = useState(localStorage.getItem("login"));

  return (
    <>
      <BrowserRouter>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Routes>    
          <Route path="/" element={<Home />} />     
          <Route path="/Student-signup" element={<StudentSignup />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/StudentLogin" element={<StudentLogin setIsLogin={setIsLogin}/>} /> 
          <Route path="/scanner" element={<Scanner />} /> 
          <Route path="/QRScan" element={<QRScan />} /> 
          <Route path="/studentdashboard" element={<Studentdashboard />} />
          <Route path="/Adminsignup" element={<Adminsignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>

        {/* ✅ Toast container yaha mount karo */}
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
}
