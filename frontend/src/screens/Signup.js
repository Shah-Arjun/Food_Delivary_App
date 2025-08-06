// src/screens/Signup.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.email || !credentials.password || !credentials.geolocation) {
      alert("All fields are required.");
      return;
    }

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      alert("Account created successfully!");
      navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#fff8f0" }}>
      <div className="card shadow p-4 w-100" style={{ maxWidth: "480px", borderRadius: "1rem" }}>
        <div className="text-center mb-4">
          <i className="bi bi-person-plus-fill fs-1 text-primary"></i>
          <h3 className="fw-bold mt-2 text-dark">Create an Account</h3>
          <p className="text-muted small">Join FoodieHub and start ordering your favorite meals.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-normal">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={credentials.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-normal">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-normal">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Choose a strong password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-normal">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="geolocation"
              placeholder="Your delivery address"
              value={credentials.geolocation}
              onChange={onChange}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-person-check-fill me-2"></i> Sign Up
            </button>
            <Link to="/home" className="btn btn-outline-secondary">
              <i className="bi bi-box-arrow-in-right me-2"></i> Already a user? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
