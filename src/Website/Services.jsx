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
            <h3>Energy Efficiency Audits</h3>
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

          {/* Reliable Rebuilds */}
          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Reliable Rebuilds</h3>
            <p>Complete pump rebuilding services with enhanced reliability and extended service life.</p>
            <div className="service-features">
              <div className="feature">✓ Complete Disassembly</div>
              <div className="feature">✓ Component Replacement</div>
              <div className="feature">✓ Performance Enhancement</div>
              <div className="feature">✓ Extended Warranty</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/reliable-rebuilds")}>
              Learn More
            </button>
          </div>

          {/* Inventory Minimization */}
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Inventory Minimization</h3>
            <p>Strategic spare parts management to reduce inventory costs while maintaining operational readiness.</p>
            <div className="service-features">
              <div className="feature">✓ Inventory Analysis</div>
              <div className="feature">✓ Interchangeable Parts</div>
              <div className="feature">✓ Just-in-Time Supply</div>
              <div className="feature">✓ Cost Reduction</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/inventory-minimization")}>
              Learn More
            </button>
          </div>

          {/* Energy Saving Expertise */}
          <div className="service-card">
            <div className="service-icon">🌱</div>
            <h3>Energy Saving Solutions</h3>
            <p>Specialized solutions to optimize pump efficiency and reduce energy consumption across industrial systems.</p>
            <div className="service-features">
              <div className="feature">✓ Hydraulic Optimization</div>
              <div className="feature">✓ System Redesign</div>
              <div className="feature">✓ Efficiency Improvement</div>
              <div className="feature">✓ ROI Analysis</div>
            </div>
            <button className="service-btn" onClick={() => navigate("/energy-saving-expertise")}>
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* Process Section */}
      <div className="services-process">
        <h2>Our Service Process</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">1</div>
            <h4>Assessment</h4>
            <p>Comprehensive evaluation of your pump systems and requirements</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h4>Analysis</h4>
            <p>Detailed technical analysis and solution development</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h4>Implementation</h4>
            <p>Professional execution of services with quality assurance</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h4>Support</h4>
            <p>Ongoing support and maintenance for optimal performance</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <h2>Ready to Optimize Your Pump Systems?</h2>
        <p>Contact our engineering experts to discuss your specific requirements and get a customized solution.</p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>
          Get Expert Consultation
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

export default Services;