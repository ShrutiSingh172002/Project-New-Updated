import React, { useState } from "react";
import "./LoginRegister.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LoginRegister = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const toggleForm = () => {
    setShowRegister(false);
    setShowForgotPassword(false);
  };

  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${resetEmail}`);
    setResetEmail("");
    setShowForgotPassword(false);
  };

  return (
    <div className="login-register-auth-container">
      <Navbar />
      <div className="login-register-auth-box">
        <div className="back-arrow" onClick={() => navigate("/")}>
          <FaArrowLeft />
          <span>Back</span>
        </div>

        <div className="login-register-auth-toggle">
          <button
            className={!showRegister && !showForgotPassword ? "login-register-active-tab" : ""}
            onClick={toggleForm}
          >
            Login
          </button>
          <button
            className={showRegister ? "login-register-active-tab" : ""}
            onClick={() => {
              setShowRegister(true);
              setShowForgotPassword(false);
            }}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {!showRegister && !showForgotPassword && (
          <div className="login-register-login-form">
            <h2 className="login-register-form-title">Customer Login</h2>
            <form>
              <input type="email" placeholder="Email ID" />
              <input type="password" placeholder="Password" />
              <button className="login-register-submit-btn">Login</button>
              <p
                className="forgot-password-link"
                onClick={() => {
                  setShowForgotPassword(true);
                  setShowRegister(false);
                }}
              >
                Forgot Password?
              </p>
            </form>
          </div>
        )}

        {/* Registration Form */}
        {showRegister && !showForgotPassword && (
          <div className="login-register-register-form">
            <h2 className="form-title">Customer Registration</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Official Email ID" />
              <input type="email" placeholder="Personal Email ID" />
              <input type="tel" placeholder="Official Phone No" />
              <input type="tel" placeholder="Personal Phone No" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Department" />
              <textarea placeholder="Company Address"></textarea>
              <button className="login-register-submit-btn">Register</button>
            </form>
          </div>
        )}

        {/* Forgot Password Form */}
        {showForgotPassword && (
          <div className="forgot-password-form">
            <h2 className="login-register-form-title">Reset Password</h2>
            <form onSubmit={handlePasswordReset}>
              <input
                type="email"
                placeholder="Enter your registered Email ID"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <button className="login-register-submit-btn">Send Reset Link</button>
              <p
                className="forgot-password-link"
                onClick={() => {
                  setShowForgotPassword(false);
                  setShowRegister(false);
                }}
              >
                Back to Login
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
