// src/App.jsx
import React from 'react';
import Home from './components/pages/Home';
import Header from './components/pages/header';
import Footer from './components/pages/footer';

function App() {
  return (
    <div>
      <Header />

      {/* Content wrapper with top padding to avoid header overlap */}
      <main className="pt-[100px] min-h-screen">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
