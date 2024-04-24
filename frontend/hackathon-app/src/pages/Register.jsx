import React, { useState, useEffect } from "react";
import Logo from "../assets/images/equacare.png";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/csrf-token");
      if (!response.ok) {
        throw new Error("Failed to fetch CSRF token");
      }
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.csrfmiddlewaretoken = csrfToken;
    console.log(JSON.stringify(formData));
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Request successful, you can handle success accordingly
        console.log("Registration successful!");
      } else {
        // Request failed, handle error
        console.error("Registration failed!");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
    // Clear the form after submission if needed
    setFormData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-4">
      <div className="col-lg-4 col-md-6 col-sm-8">
        <form onSubmit={handleSubmit}>
          <h1
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              color: "#27BCBB",
              fontSize: "20px",
              fontFamily: "sans-serif",
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
            <h4 style={{ fontWeight: "bold" }}>Create a new Account</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3 mx-auto d-block"
          >
            Sign Up
          </button>

          <div className="text-center">
            <label className="form-label">
              Already a member ?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#6366F1" }}
              >
                Login
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
