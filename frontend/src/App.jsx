// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/header';
import Footer from './pages/footer';
import Order from './pages/Order';
import Signup from './pages/signup';
import Cart from './pages/itemcart';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <>
      <Header />
      <main className="pt-[100px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/aboutus" element={<About />} />  */}
          {/* <Route path="/contactus" element={<Contact />} />  */}
          <Route path="/orders" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/itemcart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
