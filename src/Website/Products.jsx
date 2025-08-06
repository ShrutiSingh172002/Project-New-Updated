import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-container">
      <Navbar />

      {/* Hero Section */}
      <div className="products-hero">
        <div className="products-hero-content">
          <h1>Our Products</h1>
          <p>High-quality engineered components and solutions for industrial pump systems</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="products-main-content">
        <div className="products-grid">
          
          {/* Pump Spares */}
          <div className="product-card">
            <div className="product-icon">🔧</div>
            <h3>Pump Spares & Components</h3>
            <p>Precision-engineered pump spares including impellers, wear rings, shaft sleeves, and casings for various industrial applications.</p>
            <div className="product-features">
              <div className="feature">✓ OEM Standard Quality</div>
              <div className="feature">✓ Custom Specifications</div>
              <div className="feature">✓ Fast Turnaround</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/pump-parts")}>
              Learn More
            </button>
          </div>

          {/* Boiler Feed Pump Components */}
          <div className="product-card">
            <div className="product-icon">⚡</div>
            <h3>Boiler Feed Pump Components</h3>
            <p>Specialized components for high-pressure boiler feed pumps, designed for optimal performance and efficiency in power plants.</p>
            <div className="product-features">
              <div className="feature">✓ High-Pressure Rating</div>
              <div className="feature">✓ Energy Efficient</div>
              <div className="feature">✓ Corrosion Resistant</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/contact")}>
              Get Quote
            </button>
          </div>

          {/* Condensate Pump Parts */}
          <div className="product-card">
            <div className="product-icon">💧</div>
            <h3>Condensate Pump Parts</h3>
            <p>Reliable condensate pump components for steam power systems, ensuring efficient condensate return and system reliability.</p>
            <div className="product-features">
              <div className="feature">✓ Steam Resistant</div>
              <div className="feature">✓ Long Service Life</div>
              <div className="feature">✓ Maintenance Friendly</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/contact")}>
              Get Quote
            </button>
          </div>

          {/* Industrial Pump Solutions */}
          <div className="product-card">
            <div className="product-icon">🏭</div>
            <h3>Industrial Pump Solutions</h3>
            <p>Complete pump solutions for chemical, petrochemical, and manufacturing industries with custom engineering capabilities.</p>
            <div className="product-features">
              <div className="feature">✓ Chemical Compatible</div>
              <div className="feature">✓ Custom Engineering</div>
              <div className="feature">✓ Industry Certified</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/contact")}>
              Get Quote
            </button>
          </div>

          {/* Replacement Parts */}
          <div className="product-card">
            <div className="product-icon">🔄</div>
            <h3>Replacement Parts</h3>
            <p>Replacement parts for obsolete and discontinued pump models, extending equipment life and maintaining operational efficiency.</p>
            <div className="product-features">
              <div className="feature">✓ Obsolete Model Support</div>
              <div className="feature">✓ Reverse Engineered</div>
              <div className="feature">✓ Cost Effective</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/contact")}>
              Get Quote
            </button>
          </div>

          {/* Energy Efficient Components */}
          <div className="product-card">
            <div className="product-icon">🌱</div>
            <h3>Energy Efficient Components</h3>
            <p>Optimized pump components designed to reduce energy consumption and improve overall system efficiency.</p>
            <div className="product-features">
              <div className="feature">✓ Energy Savings</div>
              <div className="feature">✓ Performance Optimized</div>
              <div className="feature">✓ ROI Focused</div>
            </div>
            <button className="product-btn" onClick={() => navigate("/contact")}>
              Get Quote
            </button>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="products-cta">
        <h2>Need Custom Solutions?</h2>
        <p>Our engineering team can design and manufacture custom components to meet your specific requirements.</p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          Contact Our Engineers
        </button>
      </div>

      {/* Footer */}
      <footer className="footer-audit-paragraph">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Shaft & Seal</h3>
            <p className="footer-description">
              Engineering reliability, minimizing inventory, and maximizing efficiency 
              for industries worldwide.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <div className="footer-link" onClick={() => { navigate("/about"); window.scrollTo(0, 0); }}>
                <span>About Us</span>
              </div>
              <div className="footer-link" onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
                <span>Contact</span>
              </div>
              <div className="footer-link" onClick={() => { navigate("/terms"); window.scrollTo(0, 0); }}>
                <span>Terms & Conditions</span>
              </div>
              <div className="footer-link" onClick={() => { navigate("/privacy"); window.scrollTo(0, 0); }}>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Social Handles</h3>
            <div className="social-icons">
              <a
                href="https://youtube.com/@shaftnseal?si=rdVfDZ7qPpfzzHxS"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.youtube.com/@shaftnseal "
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578595061965"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/ShaftnSeal"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                className="x-link-text"
              >
                x
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-content-para">
            © 2025 Shaft & Seal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;