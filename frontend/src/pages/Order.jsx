import React, { useState } from "react";
// Import icons from the react-icons library
import {
  FaUpload,
  FaFileContract,
  FaUserLock,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCheckCircle,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

export default function Order() {
  const [step, setStep] = useState(1);
  const [prescription, setPrescription] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true); // Simulate login for better UX
  const [address, setAddress] = useState("123 Health St, Wellness City, 45678");
  const [payment, setPayment] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Helper function for the "Next" button
  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  // Step configuration with titles and icons
  const steps = [
    {
      title: "Upload",
      icon: <FaUpload />,
    },
    {
      title: "Terms",
      icon: <FaFileContract />,
    },
    {
      title: "Login",
      icon: <FaUserLock />,
    },
    {
      title: "Address",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Payment",
      icon: <FaCreditCard />,
    },
    {
      title: "Confirm",
      icon: <FaCheckCircle />,
    },
  ];

  // Dynamically render content based on the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Upload Prescription
            </h3>
            {/* Improved File Upload UI */}
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaUpload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">PDF, PNG, JPG or GIF</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={e => setPrescription(e.target.files[0])}
              />
            </label>
            {prescription && (
              <p className="mt-4 text-center text-green-600 font-semibold">
                File selected: {prescription.name}
              </p>
            )}
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition-all"
              disabled={!prescription}
              onClick={handleNext}
            >
              Next <FaArrowRight />
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Terms and Conditions
            </h3>
            <div className="h-40 p-2 border rounded-md overflow-y-auto text-sm text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
                [Your full terms here]
              </p>
            </div>
            <label className="flex items-center mt-4">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                checked={accepted}
                onChange={e => setAccepted(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">
                I accept the terms and conditions
              </span>
            </label>
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition-all"
              disabled={!accepted}
              onClick={handleNext}
            >
              Next <FaArrowRight />
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Login</h3>
            {loggedIn ? (
              <div className="text-center">
                <FaCheckCircle className="mx-auto w-12 h-12 text-green-500" />
                <p className="mt-2 text-gray-700">You are already logged in.</p>
                <button
                  className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                  onClick={handleNext}
                >
                  Continue <FaArrowRight />
                </button>
              </div>
            ) : (
              <div>
                <p>Please login to continue.</p>
                <button
                  className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
                  onClick={() => setLoggedIn(true)}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Delivery Address
            </h3>
            <textarea
              rows="3"
              className="border px-3 py-2 w-full rounded-md focus:ring-orange-500 focus:border-orange-500 transition-all"
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Enter your full delivery address"
            />
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition-all"
              disabled={!address}
              onClick={handleNext}
            >
              Next <FaArrowRight />
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Payment Method
            </h3>
            <select
              className="border px-3 py-2 w-full rounded-md focus:ring-orange-500 focus:border-orange-500 transition-all"
              value={payment}
              onChange={e => setPayment(e.target.value)}
            >
              <option value="">Choose a payment method...</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="UPI">UPI</option>
            </select>
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-400 transition-all"
              disabled={!payment}
              onClick={handleNext}
            >
              Next <FaArrowRight />
            </button>
          </div>
        );
      case 6:
        return (
          <div>
            {!confirmed ? (
              <>
                <h3 className="text-lg font-semibold text-gray-700">
                  Review & Confirm Order
                </h3>
                <ul className="mt-4 mb-6 space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaUpload className="mr-2 text-orange-500" />
                    Prescription: {prescription ? prescription.name : "N/A"}
                  </li>
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                    Address: {address}
                  </li>
                  <li className="flex items-center">
                    <FaCreditCard className="mr-2 text-orange-500" />
                    Payment: {payment}
                  </li>
                </ul>
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                  onClick={() => setConfirmed(true)}
                >
                  Confirm Order <FaCheck />
                </button>
              </>
            ) : (
              <div className="text-center py-8">
                <FaCheckCircle className="mx-auto w-16 h-16 text-green-500" />
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                  Order Placed Successfully!
                </h2>
                <p className="mt-2 text-gray-500">
                  Thank you for your purchase.
                </p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-[100px] px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Order With Prescription
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Follow the steps below to complete your order.
        </p>

        {/* New Visual Stepper */}
        <div className="mb-8 flex items-center justify-between">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg transition-all duration-300 ${
                    step > idx + 1
                      ? "bg-green-500 text-white"
                      : step === idx + 1
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step > idx + 1 ? <FaCheck /> : s.icon}
                </div>
                <p
                  className={`mt-2 text-xs font-semibold ${
                    step >= idx + 1 ? "text-orange-600" : "text-gray-400"
                  }`}
                >
                  {s.title}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    step > idx + 1 ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content Area */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
}