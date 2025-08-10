import React, { useState } from "react";
import "./LoginRegister.css";
import { FaArrowLeft, FaEye, FaEyeSlash, FaBuilding, FaMapMarkerAlt, FaIdCard, FaShieldAlt, FaClock, FaIndustry, FaStar, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthService } from "../services/authService";

const LoginRegister = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    name: "",
    officialEmail: "",
    personalEmail: "",
    officialPhone: "",
    personalPhone: "",
    companyName: "",
    location: "",
    department: "",
    gstNumber: "",
    pinCode: "",
    companyAddress: "",
    password: "",
    confirmPassword: ""
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setShowRegister(false);
    setShowForgotPassword(false);
    setErrors({});
    setMessage({ type: '', text: '' });
  };

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateGST = (gst) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };

  const validatePIN = (pin) => {
    const pinRegex = /^[1-9][0-9]{5}$/;
    return pinRegex.test(pin);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateRegistration = () => {
    const newErrors = {};

    if (!registerData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!registerData.officialEmail.trim()) {
      newErrors.officialEmail = "Official email is required";
    } else if (!validateEmail(registerData.officialEmail)) {
      newErrors.officialEmail = "Please enter a valid email address";
    }

    if (!registerData.personalEmail.trim()) {
      newErrors.personalEmail = "Personal email is required";
    } else if (!validateEmail(registerData.personalEmail)) {
      newErrors.personalEmail = "Please enter a valid email address";
    }

    if (!registerData.officialPhone.trim()) {
      newErrors.officialPhone = "Official phone is required";
    } else if (!validatePhone(registerData.officialPhone)) {
      newErrors.officialPhone = "Please enter a valid 10-digit phone number";
    }

    if (!registerData.personalPhone.trim()) {
      newErrors.personalPhone = "Personal phone is required";
    } else if (!validatePhone(registerData.personalPhone)) {
      newErrors.personalPhone = "Please enter a valid 10-digit phone number";
    }

    if (!registerData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!registerData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!registerData.department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!registerData.gstNumber.trim()) {
      newErrors.gstNumber = "GST number is required";
    } else if (!validateGST(registerData.gstNumber)) {
      newErrors.gstNumber = "Please enter a valid GST number (e.g., 22AAAAA0000A1Z5)";
    }

    if (!registerData.pinCode.trim()) {
      newErrors.pinCode = "PIN code is required";
    } else if (!validatePIN(registerData.pinCode)) {
      newErrors.pinCode = "Please enter a valid 6-digit PIN code";
    }

    if (!registerData.companyAddress.trim()) {
      newErrors.companyAddress = "Company address is required";
    }

    if (!registerData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(registerData.password)) {
      newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, and number";
    }

    if (!registerData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await AuthService.loginUser(loginData.email, loginData.password);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
        // Store user data in localStorage or context
        localStorage.setItem('user', JSON.stringify(result.userData));
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!validateRegistration()) {
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await AuthService.registerUser(registerData);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Registration successful! You can now login.' });
        // Clear form
        setRegisterData({
          name: "",
          officialEmail: "",
          personalEmail: "",
          officialPhone: "",
          personalPhone: "",
          companyName: "",
          location: "",
          department: "",
          gstNumber: "",
          pinCode: "",
          companyAddress: "",
          password: "",
          confirmPassword: ""
        });
        // Switch to login
        setTimeout(() => {
          setShowRegister(false);
          setShowForgotPassword(false);
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await AuthService.resetPassword(resetEmail);
      
      if (result.success) {
        setMessage({ type: 'success', text: 'Password reset email sent! Check your inbox.' });
    setResetEmail("");
        setTimeout(() => {
    setShowForgotPassword(false);
        }, 2000);
      } else {
        setMessage({ type: 'error', text: result.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Password reset failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-register-auth-container">
      <Navbar />
      
      {/* Background Design Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="login-register-page">
        <div className="login-register-grid">
          {/* Hero / Marketing Panel */}
          <section className="login-register-hero">
            <h1 className="hero-title">Engineer Your Reliability</h1>
            <p className="hero-subtitle">Access quotes, manage orders, and track pump audits—all in one place.</p>

            <div className="hero-features">
              <div className="feature-item"><FaShieldAlt /> Enterprise-grade security</div>
              <div className="feature-item"><FaClock /> 24×7 customer support</div>
              <div className="feature-item"><FaIndustry /> Trusted by 50+ industries</div>
            </div>

            <div className="trust-badges">
              <div className="badge">ISO 9001</div>
              <div className="badge">Made in India</div>
              <div className="badge">GST Ready</div>
            </div>

            <div className="testimonial-card">
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>"Shaft & Seal transformed our maintenance cycle. Reliable parts, faster turnaround."</p>
              <span className="author">Head of Maintenance, PowerGen Co.</span>
            </div>
          </section>

          {/* Auth Box */}
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
                      setErrors({});
                      setMessage({ type: '', text: '' });
                }}
              >
                Register
              </button>
            </div>

                {/* Message Display */}
                {message.text && (
                  <div className={`message ${message.type}`}>
                    {message.text}
                  </div>
                )}

            {/* Login Form */}
            {!showRegister && !showForgotPassword && (
              <div className="login-register-login-form">
                    <h2 className="login-register-form-title">Welcome Back</h2>
                    <p className="form-subtitle">Sign in to your account</p>
                    <form onSubmit={handleLoginSubmit}>
                      <div className="input-group">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email ID" 
                          value={loginData.email}
                          onChange={handleLoginChange}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="input-group password-group">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          name="password"
                          placeholder="Password" 
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                          disabled={loading}
                        />
                        <button 
                          type="button" 
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <button type="submit" className="login-register-submit-btn" disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                      </button>
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
                    <h2 className="form-title">Create Account</h2>
                    <p className="form-subtitle">Join us today</p>
                    <form onSubmit={handleRegisterSubmit}>
                      <div className="input-group">
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Full Name" 
                          value={registerData.name}
                          onChange={handleRegisterChange}
                          className={errors.name ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="email" 
                          name="officialEmail"
                          placeholder="Official Email ID" 
                          value={registerData.officialEmail}
                          onChange={handleRegisterChange}
                          className={errors.officialEmail ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.officialEmail && <span className="error-message">{errors.officialEmail}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="email" 
                          name="personalEmail"
                          placeholder="Personal Email ID" 
                          value={registerData.personalEmail}
                          onChange={handleRegisterChange}
                          className={errors.personalEmail ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.personalEmail && <span className="error-message">{errors.personalEmail}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="tel" 
                          name="officialPhone"
                          placeholder="Official Phone Number" 
                          value={registerData.officialPhone}
                          onChange={handleRegisterChange}
                          className={errors.officialPhone ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.officialPhone && <span className="error-message">{errors.officialPhone}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="tel" 
                          name="personalPhone"
                          placeholder="Personal Phone Number" 
                          value={registerData.personalPhone}
                          onChange={handleRegisterChange}
                          className={errors.personalPhone ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.personalPhone && <span className="error-message">{errors.personalPhone}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="text" 
                          name="companyName"
                          placeholder="Company Name" 
                          value={registerData.companyName}
                          onChange={handleRegisterChange}
                          className={errors.companyName ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="text" 
                          name="location"
                          placeholder="Location" 
                          value={registerData.location}
                          onChange={handleRegisterChange}
                          className={errors.location ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.location && <span className="error-message">{errors.location}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="text" 
                          name="department"
                          placeholder="Department" 
                          value={registerData.department}
                          onChange={handleRegisterChange}
                          className={errors.department ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.department && <span className="error-message">{errors.department}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="text" 
                          name="gstNumber"
                          placeholder="GST Number" 
                          value={registerData.gstNumber}
                          onChange={handleRegisterChange}
                          className={errors.gstNumber ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.gstNumber && <span className="error-message">{errors.gstNumber}</span>}
                      </div>

                      <div className="input-group">
                        <input 
                          type="text" 
                          name="pinCode"
                          placeholder="PIN Code" 
                          value={registerData.pinCode}
                          onChange={handleRegisterChange}
                          className={errors.pinCode ? "error" : ""}
                          disabled={loading}
                        />
                        {errors.pinCode && <span className="error-message">{errors.pinCode}</span>}
                      </div>

                      <div className="input-group">
                        <textarea 
                          name="companyAddress"
                          placeholder="Company Address" 
                          value={registerData.companyAddress}
                          onChange={handleRegisterChange}
                          className={errors.companyAddress ? "error" : ""}
                          disabled={loading}
                          rows="3"
                        />
                        {errors.companyAddress && <span className="error-message">{errors.companyAddress}</span>}
                      </div>

                      <div className="input-group password-group">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          name="password"
                          placeholder="Password" 
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          className={errors.password ? "error" : ""}
                          disabled={loading}
                        />
                        <button 
                          type="button" 
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                      </div>

                      <div className="input-group password-group">
                        <input 
                          type={showConfirmPassword ? "text" : "password"} 
                          name="confirmPassword"
                          placeholder="Confirm Password" 
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          className={errors.confirmPassword ? "error" : ""}
                          disabled={loading}
                        />
                        <button 
                          type="button" 
                          className="password-toggle"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                      </div>

                      <button type="submit" className="login-register-submit-btn" disabled={loading}>
                        {loading ? "Creating Account..." : "Create Account"}
                      </button>
                </form>
              </div>
            )}

            {/* Forgot Password Form */}
            {showForgotPassword && (
              <div className="forgot-password-form">
                <h2 className="login-register-form-title">Reset Password</h2>
                    <p className="form-subtitle">Enter your email to receive reset instructions</p>
                <form onSubmit={handlePasswordReset}>
                      <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your registered Email ID"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                          disabled={loading}
                  />
                      </div>
                      <button type="submit" className="login-register-submit-btn" disabled={loading}>
                        {loading ? "Sending..." : "Send Reset Link"}
                      </button>
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
      </div>
      
      {/* Footer */}
      <footer className="footer-audit-paragraph">
        <div className="footer-content">
          <div className="footer-copyright-left">
            <p className="footer-copyright-text">
              © 2025 Shaft & Seal. All rights reserved.
            </p>
          </div>
          
          <div className="footer-social-section">
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
      </footer>
    </div>
  );
};

export default LoginRegister;
