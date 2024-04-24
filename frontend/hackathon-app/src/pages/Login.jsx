import React, { useState } from "react";
import Logo from "../assets/images/equacare.png";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Request successful, you can handle success accordingly
        console.log("Login successful!");
      } else {
        // Request failed, handle error
        console.error("Login failed!");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
    // Clear the form after submission if needed
    setFormData({
      username: "",
      password: ""
    });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-4 col-md-6 col-sm-8">
        <form onSubmit={handleSubmit}>
          <h1
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              color: "#27BCBB",
              fontSize: "20px",
              fontFamily: "sans-serif"
            }}
          >
            EquaCare
          </h1>
          <div className="mb-2 d-flex justify-content-center">
            <img
              src={Logo}
              className="Logo"
              alt="Logo"
              style={{ width: "60px" }}
            />
          </div>
          <div className="mb-4 text-center">
            <h4 style={{ fontWeight: "bold" }}>Login to your Account</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <label className="form-label">Password</label>
            <Link
              to="/forgotpassword"
              style={{
                textDecoration: "none",
                color: "#6366F1",
                fontWeight: "bold"
              }}
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary my-3 mx-auto d-block"
          >
            Log in
          </button>
          <div className="text-center">
            <label className="form-label">
              Not a member?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#6366F1" }}
              >
                Create an Account
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
