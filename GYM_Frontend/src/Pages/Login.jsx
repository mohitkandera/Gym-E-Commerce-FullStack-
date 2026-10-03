import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from "../assets/bg.jpg";

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

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7036/api/Auth/login",
        loginData
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");

      if (response.data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div
      className="vh-100 overflow-hidden d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-white d-none d-lg-block">

            <div className="mb-4">
              <h1 className="fw-bold display-4">
                <span className="text-danger">GYM</span> STORE
              </h1>

              <p className="text-uppercase fw-semibold text-light">
                Fitness • Gear • Lifestyle
              </p>
            </div>

            <h2 className="display-5 fw-bold">
              STRONGER THAN
              <br />
              <span className="text-danger">YESTERDAY</span>
            </h2>

            <p className="lead text-light mt-3">
              Build your fitness journey with the best gym products
              and equipment.
            </p>

            <div className="mt-4">

              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  🚚
                </div>

                <div>
                  <h6 className="mb-1 fw-bold">
                    Fast & Reliable Delivery
                  </h6>
                  <small className="text-light">
                    Get your products on time.
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  🔒
                </div>

                <div>
                  <h6 className="mb-1 fw-bold">
                    Secure Shopping
                  </h6>
                  <small className="text-light">
                    Shop with confidence.
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  💪
                </div>

                <div>
                  <h6 className="mb-1 fw-bold">
                    Premium Fitness Products
                  </h6>
                  <small className="text-light">
                    Everything you need for your workout.
                  </small>
                </div>
              </div>

            </div>
          </div>

          {/* LOGIN CARD */}
          <div className="col-12 col-md-8 col-lg-5">

            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{
                background: "rgba(15, 20, 25, 0.94)",
                backdropFilter: "blur(10px)",
              }}
            >

              <div className="card-body p-4 p-md-5">

                {/* LOGO */}
                <div className="text-center mb-4">

                  <div
                    className="bg-danger text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center shadow"
                    style={{
                      width: "65px",
                      height: "65px",
                      fontSize: "28px",
                    }}
                  >
                    🏋️
                  </div>

                  <h2 className="text-white fw-bold mb-1">
                    Welcome Back
                  </h2>

                  <p className="text-secondary mb-0">
                    Login to continue your fitness journey
                  </p>

                </div>

                {/* ERROR */}
                {error && (
                  <div className="alert alert-danger py-2 text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  {/* EMAIL */}
                  <div className="mb-4">

                    <label className="form-label text-white fw-semibold">
                      Email Address
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark text-light border-secondary">
                        ✉️
                      </span>

                      <input
                        type="email"
                        name="email"
                        className="form-control bg-dark text-white border-secondary py-2"
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* PASSWORD */}
                  <div className="mb-4">

                    <label className="form-label text-white fw-semibold">
                      Password
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark text-light border-secondary">
                        🔒
                      </span>

                      <input
                        type="password"
                        name="password"
                        className="form-control bg-dark text-white border-secondary py-2"
                        placeholder="Enter your password"
                        // value={loginData.password}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* LOGIN BUTTON */}
                  <button
                    type="submit"
                    className="btn btn-danger w-100 py-2 fw-bold rounded-3"
                    style={{
                      fontSize: "17px",
                      transition: "0.3s",
                    }}
                  >
                    Login 
                  </button>

                </form>

                {/* DIVIDER */}
                <div className="d-flex align-items-center my-4">

                  <hr className="flex-grow-1 border-secondary" />

                  <span className="text-secondary mx-3">
                    OR
                  </span>

                  <hr className="flex-grow-1 border-secondary" />

                </div>

                {/* REGISTER */}
                <p className="text-center text-secondary mb-0">

                  Don't have an account?{" "}

                  <Link
                    to="/Register"
                    className="text-danger fw-bold text-decoration-none"
                  >
                    Register
                  </Link>

                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;