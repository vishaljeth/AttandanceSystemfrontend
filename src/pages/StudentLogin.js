  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { toast } from 'react-toastify';



    export default function StudentLogin({setIsLogin}) {

      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
      const response = await axios.post("https://attandence-backend.vercel.app/login" ,formData);
  localStorage.setItem("token", response.data.token);

      console.log(response.data);
      toast.success("login succesfully");
      setIsLogin(true)
        if(response.data.userType === "admin"){
          navigate("/admin-dashboard")
          localStorage.setItem("login", true);   
          localStorage.setItem("name", response.data.user.name);   // ✅ admin name store


        }else{
          navigate("/studentdashboard")
          localStorage.setItem("name",response.data.user.name);
          localStorage.setItem("rollno",response.data.user.rollno)
          localStorage.setItem("login", true);
        }
      };

      return (
        <div className="login-container">
          <div className="login-box">
            <h2> Login here</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
