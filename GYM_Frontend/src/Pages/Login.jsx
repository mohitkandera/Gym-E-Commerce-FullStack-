import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from '../assets/bg.jpg';

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7036/api/Auth/login",
        loginData
      );

      localStorage.setItem("token", response.data.token);


      if(response.data.role === "Admin"){
        navigate("/admin");
      }else{
        navigate("/");
      }
      alert("Login Successful!");

     
    } catch (err) {
      setError("Invalid Email or Password");
      setError("Login failed");
    }
  };

  return (
    <div className="container mt-5" >
      <div
        className="card shadow mx-auto p-4 "
        style={{ maxWidth: "400px", height: "500px"}}
      >
        <h2 className="text-center mb-4">Login</h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/Register">Register</Link>
        </p>
         
      </div>
     
    </div>
  );
}

export default Login;


// bhai naya user resgister nhi kar pa raha mane token bhi lagaya h login to ho raha h admin vala