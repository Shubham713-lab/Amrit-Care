// src/pages/Home.jsx
import React from "react";
import HomeBanner from "./homebanner";
import Corosol from "./Corosol";
export default function Home() {
  return (
    <div className="container mx-auto pt-[100px] px-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Amrit Care!</h1>
      <p className="text-lg">Namste</p>
      <HomeBanner />
      <Corosol />
    </div>
  );
}
