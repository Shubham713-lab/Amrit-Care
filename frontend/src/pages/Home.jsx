import React, { useState, useEffect } from "react";
import HomeBanner from "./homebanner";
import Corosol from "./Corosol";

export default function Home() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend API
    fetch('http://localhost:8000/api')
      .then(response => response.json())
      .then(data => {
        setApiMessage(data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
        setApiMessage('Failed to connect to the backend.');
      });
  }, []);

  return (
    // REMOVED: The outer container and top padding.
    // The main <main> tag in App.jsx already handles the top padding.
    // This allows the banner and carousel to be full-width.
    <>
      <HomeBanner />
      <Corosol />

      {/* Put the connection status inside its own centered container for proper alignment */}
      <div className="container mx-auto px-4 py-8">
        <div className="p-4 bg-gray-100 rounded-lg text-center">
          <p className="font-semibold">Backend Connection Status:</p>
          <p className="text-orange-500">
            {apiMessage ? apiMessage : 'Connecting...'}
          </p>
        </div>
      </div>
    </>
  );
}