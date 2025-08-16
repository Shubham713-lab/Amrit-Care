// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/header';
import Footer from './pages/footer';
import Order from './pages/Order';

function App() {
  return (
    <>
      <Header />
      <main className="pt-[100px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
