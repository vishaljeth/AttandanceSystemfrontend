import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({isLogin, setIsLogin}) {  
  const handleLogout = ()=>{
    localStorage.clear();
    setIsLogin(false);  
  }
  return (
    <nav className="navbar">
      <div className="logo">Attendance System</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {!isLogin ?
        <>
                <li><Link to="/studentLogin">Student Login</Link></li>
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
