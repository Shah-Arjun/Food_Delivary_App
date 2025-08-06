// src/screens/Login.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "danger" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      setToast({ show: true, message: json.error || "Invalid Credentials", type: "danger" });
      return;
    }

    localStorage.setItem("userEmail", credentials.email);
    localStorage.setItem("authToken", json.authToken);
    navigate("/");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light p-4">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {/* Logo or Hero */}
        <div className="text-center mb-4">
          <i className="bi bi-bag-heart-fill text-danger" style={{ fontSize: "3rem" }}></i>
          <h4 className="fw-bold mt-2">Welcome to FoodieHub</h4>
          <p className="text-muted small">Login to get your food delivered!</p>
        </div>

        {/* Login Form */}
        <div className="card p-4 shadow-sm rounded-4 border-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label small fw-normal">Email</label>
              <input
                type="email"
                className="form-control rounded-3"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label small fw-normal">Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                id="password"
                name="password"
                placeholder="••••••••"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-danger rounded-3">
                <i className="bi bi-box-arrow-in-right me-2"></i> Login
              </button>
              <Link to="/createuser" className="btn btn-outline-secondary rounded-3">
                <i className="bi bi-person-plus me-2"></i> I'm a New User
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`toast show position-fixed bottom-0 end-0 m-3 bg-${toast.type} text-white`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToast({ ...toast, show: false })}
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}
