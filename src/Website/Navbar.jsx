import React from "react";
import "./Navbar.css";
import logoImage from "./logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className="navbar-links">
        <span className="navbar-link" onClick={() => navigate("/")}>
          Home
        </span>
        <span className="navbar-link" onClick={() => navigate("/products")}>
          Products
        </span>
        <span className="navbar-link" onClick={() => navigate("/services")}>
          Services
        </span>
        <span className="navbar-link" onClick={() => navigate("/contact")}>
          Contact Us
        </span>
        <span className="navbar-link" onClick={() => navigate("/login")}>
          Login
        </span>
      </div>
    </div>
  );
};

export default Navbar; 