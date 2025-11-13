import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">
          Prime Top Holding (PVT)
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/salary-details">
                Salary Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bank-details">
                Bank Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profit">
                Profit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;