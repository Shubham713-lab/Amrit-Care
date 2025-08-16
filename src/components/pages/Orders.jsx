// src/pages/Orders.jsx

import React, { useState } from "react";
import "../styles/Order.css"; // We'll use this new CSS file

// You would typically define these as separate components in a real app
const Step1_Upload = () => <div>Content for "Upload Prescription" will go here.</div>;
const Step2_Terms = () => <div>Content for "Terms & Conditions" will go here.</div>;
const Step3_Payment = () => <div>Content for "Payment Summary" will go here.</div>;
const Step4_Login = () => <div>Content for "Login / Signup" will go here.</div>;
const Step5_Delivery = () => <div>Content for "Delivery Details" will go here.</div>;
const Step6_Confirmation = () => <div>Thank you! Your order is confirmed.</div>;


const Orders = () => {
  const steps = [
    "Upload",
    "Terms",
    "Payment",
    "Login",
    "Delivery",
    "Confirm"
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Renders the component for the current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return <Step1_Upload />;
      case 1: return <Step2_Terms />;
      case 2: return <Step3_Payment />;
      case 3: return <Step4_Login />;
      case 4: return <Step5_Delivery />;
      case 5: return <Step6_Confirmation />;
      default: return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="order-container">
      <h1>Place Your Order</h1>

      {/* Modern Horizontal Stepper */}
      <div className="stepper-wrapper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-item ${currentStep === index ? "active" : ""} ${index < currentStep ? "completed" : ""}`}
          >
            <div className="step-counter">
              {index < currentStep ? "✓" : index + 1}
            </div>
            <div className="step-name">{step}</div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="step-buttons">
        <button
          className="btn-secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Back
        </button>
        {currentStep === steps.length - 1 ? (
          <button className="btn-primary" disabled>Finish</button>
        ) : (
          <button className="btn-primary" onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Orders;