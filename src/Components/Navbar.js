import React,{useState,useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";   // 👈 ye css import zaroori hai

export default function Navbar({isLogin, setIsLogin}) {  

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    setTimeout(() => navigate("/studentLogin"), 0);
    toast.error("logout succesfull...")
    
  };
  
  return (
    <nav className="navbar">
      <div className="logo">Attendance System</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {!isLogin ?
        <>
                <li><Link to="/studentLogin"> Login</Link></li>
                <li><Link to="/student-signup">Student Signup</Link></li>  {/* Added Signup */}
                <li><Link to="/Adminsignup">Admin Signup</Link></li>
                </>
                :<>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </>
              }
      </ul>
    </nav>
  );
}
