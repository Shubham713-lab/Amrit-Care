// src/pages/Home.jsx
import React from "react";
import HomeBanner from "./homebanner";

export default function Home() {
  return (
    <div className="pt-[100px] px-8" style={{ paddingTop: '100px', padding: '2rem' }}>
      <h1 className="text-3xl font-bold mb-4">Namaste</h1>
      <p className="text-lg">Welcome to the Medicine Delivery Website!</p>
    </div>
  );
}
