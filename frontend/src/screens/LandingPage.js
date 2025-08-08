// src/screens/LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "3rem",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <img
            src="/logo-removebg-preview.png"
            alt="FoodieHub"
            height="300"
            className="me-2"
            style={{ objectFit: "contain" }}
          />
          {/* <i className="bi bi-basket-fill fs-1 mb-3"></i> */}
          <h1 className="display-4 fw-bold">Welcome to FoodieHub</h1>
          <p className="lead mt-3 mb-4">
            Craving something delicious? Get your favorite meals delivered to
            your doorstep.
          </p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link
              to="/login"
              className="btn btn-warning btn-lg rounded-pill px-4 shadow"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i> Login
            </Link>
            <Link
              to="/createuser"
              className="btn btn-outline-light btn-lg rounded-pill px-4"
            >
              <i className="bi bi-person-plus me-2"></i> Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-dark">Why Choose FoodieHub?</h2>


          <div className="row g-4">

{/* 1st box */}
            <div className="col-md-4">
              <div className="box fast-delivary p-4 shadow-sm bg-white rounded-4 h-100">
                <i className="bi bi-truck fs-2 text-danger mb-3"></i>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted">
                  Your food delivered hot and fresh in record time!
                </p>
              </div>
            </div>

{/* 2nd box */}
            <div className="col-md-4">
              <div className="box top-rated p-4 shadow-sm bg-white rounded-4 h-100">
                <div class="d-flex justify-content-center">
                  <div class="content text-center">
                    <div class="ratings">
                      <span class="product-rating">4.6</span>
                      <span>/5</span>
                      <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>

                      <div class="rating-text"></div>
                    </div>
                  </div>
                </div>

                {/* <i className="bi bi-star-fill fs-2 text-warning mb-3"></i> */}
                <h5 className="fw-bold">Top Rated Restaurants</h5>
                <p className="text-muted">
                  We partner with the best restaurants in town.
                </p>
              </div>
            </div>

{/* 3rd box */}
            <div className=" col-md-4">
              <div className=" box easy-use p-4 shadow-sm bg-white rounded-4 h-100">
                <i className="bi bi-phone fs-2 text-primary mb-3"></i>
                <h5 className="fw-bold">Easy to Use App</h5>
                <p className="text-muted">
                  Order food in just a few taps from your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-center text-white"
        style={{ backgroundColor: "#ff7043" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Hungry? Let's Get You Fed!</h2>
          <p className="mb-4">
            Sign in or create an account to start ordering delicious meals
            today.
          </p>
          <Link
            to="/login"
            className="btn btn-dark btn-lg rounded-pill px-4 shadow"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>© 2025 FoodieHub. All rights reserved.</small>
      </footer>
    </div>
  );
}

