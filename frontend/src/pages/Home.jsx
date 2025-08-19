import React, { useState, useEffect } from "react";
import HomeBanner from "./homebanner";
import Corosol from "./Corosol";

export default function Home() {
  // State to store the message from the backend
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend API
    fetch('http://localhost:8000/api')
      .then(response => response.json())
      .then(data => {
        // Set the message from the API response
        setApiMessage(data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
        setApiMessage('Failed to connect to the backend.');
      });
  }, []); // The empty array ensures this runs only once

  return (
    // You can use a fragment <> to avoid adding an extra div
    <>
      {/* Your existing Home page content */}
      <div className="container mx-auto pt-[100px] px-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Amrit Care!</h1>
        <p className="text-lg">Namste</p>
        <HomeBanner />
        <Corosol />

        {/* Display the connection status from the backend */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
          <p className="font-semibold">Backend Connection Status:</p>
          <p className="text-orange-500">
            {apiMessage ? apiMessage : 'Connecting...'}
          </p>
        </div>
      </div>
    </>
  );
}