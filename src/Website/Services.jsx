import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <Navbar />

      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive engineering services for pump systems and industrial applications</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="services-main-content">
        <div className="services-grid">
          
          {/* Reverse Engineering */}
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Reverse Engineering</h3>
            <p>Complete reverse engineering of pump components using advanced CAD/CAM technology and precision metrology.</p>
            <div className="service-features">
              <div className="feature">✓ 3D Scanning & Modeling</div>
              <div className="feature">✓ Material Analysis</div>
              <div className="feature">✓ Performance Optimization</div>
              <div className="feature">✓ OEM Standard Quality</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/reverse-engineering")}>
              Learn More
            </button>
          </div>

          {/* Precision Pump Repair */}
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Precision Pump Repair</h3>
            <p>Expert repair services for industrial pumps with focus on restoring original performance and efficiency.</p>
            <div className="service-features">
              <div className="feature">✓ Complete Pump Overhaul</div>
              <div className="feature">✓ Component Restoration</div>
              <div className="feature">✓ Performance Testing</div>
              <div className="feature">✓ Quality Assurance</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/precision-pump-repair")}>
              Learn More
            </button>
          </div>

          {/* Energy Efficiency Audits */}
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Energy Efficiency Audits & Implementations</h3>
            <p>Comprehensive energy audits to identify optimization opportunities and reduce operational costs.</p>
            <div className="service-features">
              <div className="feature">✓ Performance Analysis</div>
              <div className="feature">✓ Energy Consumption Study</div>
              <div className="feature">✓ Cost-Benefit Analysis</div>
              <div className="feature">✓ Optimization Recommendations</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/energy-audit")}>
              Learn More
            </button>
          </div>

          

        </div>
      </div>

     
      {/* Footer */}
      <footer className="footer-audit-paragraph">
        <div className="footer-content">
          <div className="footer-section">
            <div className="company-watermark">
              <img src="/logo.jpg" alt="Shaft & Seal" className="footer-logo" />
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="social-icons">
              <a href="https://youtube.com/@shaftnseal?si=rdVfDZ7qPpfzzHxS" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube />
              </a>
              <a href="https://www.youtube.com/@shaftnseal" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578595061965" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FaFacebook />
              </a>
              <a href="https://x.com/ShaftnSeal" target="_blank" rel="noopener noreferrer" title="Twitter" className="x-link-text">
                x
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p className="footer-content-para">
            © 2025 Shaft & Seal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;