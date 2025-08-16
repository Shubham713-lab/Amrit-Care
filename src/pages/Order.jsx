import React, { useState } from "react";

export default function Order() {
  const [step, setStep] = useState(1);
  const [prescription, setPrescription] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Simulate login
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Step content
  const steps = [
    {
      title: "Upload Prescription",
      content: (
        <div>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={e => setPrescription(e.target.files[0])}
          />
          {prescription && <p>File: {prescription.name}</p>}
          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
            disabled={!prescription}
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "Terms and Conditions",
      content: (
        <div>
          <p>
            Please accept our <a href="#">Terms and Conditions</a> to proceed.
          </p>
          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={e => setAccepted(e.target.checked)}
            />
            <span className="ml-2">I accept the terms and conditions</span>
          </label>
          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
            disabled={!accepted}
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "Login",
      content: (
        <div>
          {loggedIn ? (
            <div>
              <p>You are logged in.</p>
              <button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
                onClick={() => setStep(step + 1)}
              >
                Next
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
      ),
    },
    {
      title: "Address",
      content: (
        <div>
          <label className="block mb-2">Delivery Address:</label>
          <input
            type="text"
            className="border px-2 py-1 w-full"
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
            disabled={!address}
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "Payment Method",
      content: (
        <div>
          <label className="block mb-2">Select Payment Method:</label>
          <select
            className="border px-2 py-1 w-full"
            value={payment}
            onChange={e => setPayment(e.target.value)}
          >
            <option value="">Choose...</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
            disabled={!payment}
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      ),
    },
    {
      title: "Confirm Order",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-2">Review & Confirm</h2>
          <ul className="mb-4">
            <li>Prescription: {prescription ? prescription.name : "Not uploaded"}</li>
            <li>Address: {address}</li>
            <li>Payment: {payment}</li>
          </ul>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => setConfirmed(true)}
          >
            Confirm Order
          </button>
          {confirmed && (
            <p className="mt-4 text-green-700 font-bold">
              Order placed successfully!
            </p>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-xl mx-auto pt-[100px] px-8">
      <h1 className="text-3xl font-bold mb-4">Order Medicines</h1>
      <div className="mb-6 flex space-x-2">
        {steps.map((s, idx) => (
          <div
            key={s.title}
            className={`px-3 py-1 rounded-full text-sm ${
              step === idx + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {s.title}
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded shadow">{steps[step - 1].content}</div>
    </div>
  );
}