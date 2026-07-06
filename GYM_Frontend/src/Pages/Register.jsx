import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://localhost:7036/api/Auth/register",
        formData
      );

      // JWT Token Save
      localStorage.setItem("token", res.data.token);

      alert("Registered Successfully!");

      // Home Page Redirect
      navigate("/");
    } catch (error) {
      console.log(error.response?.data?.errors);
      alert("Register Failed");
    }
  };

  return (
    <div className="container  d-flex mt-30 h-120 align-item-center justify-content-center text-align-center ">
      <div className="card p-4 shadow w-110 gap-20">
        <h2 className="d-flex align-item-center justify-content-center text-align-center">Register</h2>

        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-2"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="form-control mb-3"
            onChange={handleChange}
            value={formData.role}
            required
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>

          <button type="submit" className="btn btn-primary d-flex align-item-center justify-content-center text-align-center">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;