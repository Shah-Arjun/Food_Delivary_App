import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from '../screens/Cart';
import MyOrder from '../screens/MyOrder'
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark text-white shadow-sm mt-0 mb-0 pt-0 pb-0" style={{ backgroundColor: "#198754" }}>
        <div className="container-fluid px-3">
          {/* Left: Logo & Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/logo-removebg-preview.png"
              alt="FoodieHub"
              height="100"
              className="me-2"
              style={{ objectFit: "contain" }}
            />
            <span className="fs-3 fw-bold fst-italic">FoodieHub</span>
          </Link>

          {/* Hamburger Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center & Right Content */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {/* Center: Navigation Links */}
            <ul className="navbar-nav mx-auto text-center">
  <li className="nav-item mx-3 ps-pe-5" type="button" class="btn-outline-light rounded-3">
    <Link className="nav-link fs-5" to="/">Home</Link>
  </li>
  {localStorage.getItem("authToken") && (
    <li className="nav-item mx-3 btn-outline-light rounded-3">
      <Link className="nav-link fs-5" to="/myorder">My Orders</Link>
    </li>
  )}
</ul>

            {/* Right: Auth Buttons */}
            <div className="d-flex justify-content-center justify-content-lg-end align-items-center gap-2 mt-3 mt-lg-0">
              {!localStorage.getItem("authToken") ? (
                <>
                  <Link className="btn btn-outline-light" to="/login">Login</Link>
                  <Link className="btn btn-light text-success" to="/createuser">Sign Up</Link>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-light position-relative mx-1"
                    onClick={() => setCartView(true)}
                  >
                    My Cart
                    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                      {data.length}
                    </Badge>
                  </button>
                  {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                  <button className="btn btn-outline-danger mx-1" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
