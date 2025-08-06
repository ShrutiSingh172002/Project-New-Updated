import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter,FaArrowLeft } from "react-icons/fa";
import "./ReverseEngineeringPage.css";
import { useNavigate } from "react-router-dom";

const ReverseEngineeringPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="reverse-engineering-page">
          <div className="back-arrow" onClick={() => navigate("/")}>
                <FaArrowLeft />
                <span>Back</span>
              </div>
        <h1 className="reverse-engineering-page-head">Reverse Engineering of Pumping Systems</h1>
         <h4 className="reverse-engineering-page-heading">Steps that we follow</h4>
        <ol className="reverse-engineering-page-list">
          <li><strong>Initial Assessment & Dismantling:</strong> Preliminary inspection, dismantling, and documentation.</li>
          <li><strong>Degreasing & Cleaning:</strong> Chemical and ultrasonic cleaning.</li>
          <li><strong>3D Scanning & Measurement:</strong> CMM/laser scanning, precision measurement.</li>
          <li><strong>CAD Drawing Preparation:</strong> 3D modeling with GD&T and tolerances.</li>
          <li><strong>Drawing Review & Verification:</strong> Physical verification, simulations.</li>
          <li><strong>Pattern Making:</strong> Wood and aluminum patterns.</li>
          <li><strong>Metal Casting:</strong> WCB/CI/CA6NM casting with sand/shell molding.</li>
          <li><strong>Shot Blasting & Heat Treatment:</strong> Material conditioning based on grade.</li>
          <li><strong>Material Testing:</strong> Spectro, hardness, tensile, UT/DPT testing.</li>
          <li><strong>Machining:</strong> Rough + final machining, lapping & polishing.</li>
          <li><strong>Rotor Balancing:</strong> Dynamic balancing as per ISO.</li>
          <li><strong>Clearance Checks:</strong> API-standard tolerances and clearances.</li>
          <li><strong>Pump Assembly:</strong> Seals, bearings, torquing, preload.</li>
          <li><strong>Hydrostatic Test:</strong> 150% pressure test with zero leakage.</li>
          <li><strong>Painting & Finishing:</strong> Epoxy, PU coatings.</li>
          <li><strong>Dispatch & Site Fitment:</strong> Fitment, alignment, trial run, and handover.</li>
        </ol>
      </div>

    <footer className="footer-audit-paragraph">
          <div className="footer-content">
            <p className="footer-content-para">
              © 2025 Shaft & Seal. All rights reserved.
            </p>
            <div className="social-icons">
              <a
                href="https://youtube.com/@shaftnseal?si=rdVfDZ7qPpfzzHxS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.youtube.com/@shaftnseal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578595061965"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/ShaftnSeal"
                target="_blank"
                rel="noopener noreferrer"
                className="x-link-text"
              >
                x
              </a>
            </div>
          </div>
        </footer>
    </>
  );
};

export default ReverseEngineeringPage;
