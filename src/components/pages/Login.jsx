// src/pages/LoginPage.jsx

import React, { useState } from "react";
 // We will add a small update to this file too

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // --- Login Form State (Unchanged) ---
  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  // --- Signup Form State (Updated) ---
  const [signupData, setSignupData] = useState({
    name: "",
    village: "",
    city: "",
    district: "",
    state: "",
    pin: "",
    contact: "",
    password: "",
    confirmPassword: "" // Added confirm password field
  });

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupChange = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", loginData);
    alert("Login Successful! (Check console for data)");
  };
  
  // --- Updated Signup Submit Handler ---
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return; // Stop the form submission
    }
    // In a real app, you would exclude 'confirmPassword' before sending to the server
    console.log("Signup submitted:", signupData);
    alert("Signup Successful! (Check console for data)");
  };


  return (
    <div className="auth-container">
      <div className="auth-form-card">
        <h2 className="form-title">{isLogin ? "Welcome Back!" : "Create an Account"}</h2>
        
        {isLogin ? (
          // --- Login Form (Unchanged) ---
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="form-input" placeholder="Enter your phone number" value={loginData.phone} onChange={handleLoginChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" value={loginData.password} onChange={handleLoginChange} required />
            </div>
            <button type="submit" className="btn-submit">Login</button>
          </form>
        ) : (
          // --- Signup Form (Updated with new fields) ---
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Enter your full name" value={signupData.name} onChange={handleSignupChange} required />
            </div>
            
            {/* New Address Fields */}
            <div className="form-group">
              <label className="form-label" htmlFor="village">Village / Area</label>
              <input type="text" id="village" name="village" className="form-input" placeholder="e.g., Ramnagar" value={signupData.village} onChange={handleSignupChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="city">City</label>
                <input type="text" id="city" name="city" className="form-input" placeholder="e.g., Rajkot" value={signupData.city} onChange={handleSignupChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="district">District</label>
                <input type="text" id="district" name="district" className="form-input" placeholder="e.g., Rajkot" value={signupData.district} onChange={handleSignupChange} required />
              </div>
            </div>
             <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="state">State</label>
                <input type="text" id="state" name="state" className="form-input" placeholder="e.g., Gujarat" value={signupData.state} onChange={handleSignupChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="pin">PIN Code</label>
                <input type="text" id="pin" name="pin" className="form-input" placeholder="e.g., 360001" value={signupData.pin} onChange={handleSignupChange} required pattern="\d{6}" title="PIN Code must be 6 digits" />
              </div>
            </div>
            
             <div className="form-group">
              <label className="form-label" htmlFor="contact">Phone Number</label>
              <input type="tel" id="contact" name="contact" className="form-input" placeholder="Enter your 10-digit number" value={signupData.contact} onChange={handleSignupChange} required pattern="\d{10}" title="Phone number must be 10 digits"/>
            </div>

            {/* New Password Fields */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" name="password" className="form-input" placeholder="Create a password" value={signupData.password} onChange={handleSignupChange} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirmPassword" className="form-input" placeholder="Confirm password" value={signupData.confirmPassword} onChange={handleSignupChange} required />
              </div>
            </div>

            <button type="submit" className="btn-submit">Sign Up</button>
          </form>
        )}

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;