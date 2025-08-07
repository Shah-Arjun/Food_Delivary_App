import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
<footer className="text-white py-4 pt-0 pb-0 mt-0 mb-0" style={{ backgroundColor: "#198754" }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">

          {/* Logo & Brand */}
          <div className="col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
            <Link to="/" className="d-flex align-items-center text-white text-decoration-none">
              <img src="/logo-removebg-preview.png" alt="FoodieHub" height="120" className="me-3" />
              <span className="fs-4 fw-bold">FoodieHub</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <small className="d-block">© 2025 FoodieHub, Inc.</small>
            <small className="d-block">All rights reserved.</small>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            {[
              { href: "https://facebook.com", icon: "bi-facebook", label: "Facebook" },
              { href: "https://twitter.com", icon: "bi-twitter", label: "Twitter" },
              { href: "https://instagram.com", icon: "bi-instagram", label: "Instagram" },
              { href: "https://linkedin.com", icon: "bi-linkedin", label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a
                key={icon}
                href={href}
                className="text-white mx-2 social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <i className={`bi ${icon} fs-4`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styling or move to CSS file */}
      <style>
        {`
          .social-icon:hover {
            color: #ffd700;
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </footer>
  );
}
