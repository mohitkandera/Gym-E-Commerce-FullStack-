import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://localhost:7036/api/Auth/register",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert("Registered Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.errors);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className="vh-80 d-flex align-items-center justify-content-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.78),
          rgba(0,0,0,0.78)
        ), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container h-100 d-flex align-items-center justify-content-center">

        <div className="row align-items-center justify-content-center w-100">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-white d-none d-lg-block">

            <div className="mb-4">
              <h1 className="fw-bold display-5">
                <span className="text-danger">GYM</span> STORE
              </h1>

              <p className="text-uppercase fw-semibold">
                Fitness • Gear • Lifestyle
              </p>
            </div>

            <h2 className="display-5 fw-bold">
              START YOUR
              <br />
              <span className="text-danger">FITNESS JOURNEY</span>
            </h2>

            <p className="lead text-light mt-3">
              Create your account and get access to premium
              gym products and fitness equipment.
            </p>

            <div className="mt-4">

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  💪
                </div>

                <div>
                  <h6 className="fw-bold mb-0">
                    Premium Gym Products
                  </h6>
                  <small className="text-light">
                    Quality equipment for your workout.
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  🚚
                </div>

                <div>
                  <h6 className="fw-bold mb-0">
                    Fast Delivery
                  </h6>
                  <small className="text-light">
                    Get your fitness products quickly.
                  </small>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  🔒
                </div>

                <div>
                  <h6 className="fw-bold mb-0">
                    Secure Account
                  </h6>
                  <small className="text-light">
                    Your account and information are protected.
                  </small>
                </div>
              </div>

            </div>
          </div>


          {/* REGISTER CARD */}
          <div className="col-10  col-md-6 col-lg-5">

            <div
              className="card border-0  shadow-lg rounded-4"
              style={{
                background: "rgba(15, 20, 25, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >

              <div className="card-body p-4 p-md-5">

                {/* LOGO */}
                <div className="text-center mb-4">

                  <div
                    className="bg-danger text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center shadow"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "26px",
                    }}
                  >
                    🏋️
                  </div>

                  <h2 className="text-white fw-bold mb-1">
                    Create Account
                  </h2>

                  <p className="text-secondary mb-0">
                    Join the GYM STORE community
                  </p>

                </div>


                {/* ERROR */}
                {error && (
                  <div className="alert alert-danger py-2 text-center">
                    {error}
                  </div>
                )}


                <form onSubmit={handleSubmit}>

                  {/* NAME */}
                  <div className="mb-3">

                    <label className="form-label text-white fw-semibold">
                      Full Name
                    </label>

                    <div className="input-group">

                      <span className="input-group-text bg-dark text-light border-secondary">
                        👤
                      </span>

                      <input
                        type="text"
                        name="name"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  {/* EMAIL */}
                  <div className="mb-3">

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
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  {/* PASSWORD */}
                  <div className="mb-3">

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
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>


                  {/* ROLE */}
                  <div className="mb-4">

                    <label className="form-label text-white fw-semibold">
                      Account Type
                    </label>

                    <select
                      name="role"
                      className="form-select bg-dark text-white border-secondary"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="User">
                        User
                      </option>

                      <option value="Admin">
                        Admin
                      </option>

                    </select>

                  </div>


                  {/* REGISTER BUTTON */}
                  <button
                    type="submit"
                    className="btn btn-danger w-100 py-2 fw-bold rounded-3"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Create Account →
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


                {/* LOGIN LINK */}
                <p className="text-center text-secondary mb-0">

                  Already have an account?{" "}

                  <Link
                    to="/login"
                    className="text-danger fw-bold text-decoration-none"
                  >
                    Login
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

export default Register;