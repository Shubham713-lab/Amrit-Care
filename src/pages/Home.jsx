// src/pages/Home.jsx
import React from "react";
import HomeBanner from "./Page/HomeBanner";
import Corosol from "./Page/Corosol";
export default function Home() {
  return (
    <div className="container mx-auto pt-[100px] px-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Amrit Care!</h1>
      <p className="text-lg">Namste</p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="container mx-auto">
      <HomeBanner />
    </div>
  );
}
