import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
  FaUser,
  FaShoppingCart,
} from 'react-icons/fa';

function Header() {
  const [cartLength, setCartLength] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateCartLength = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartLength(cart.length);
  };

  useEffect(() => {
    updateCartLength();
    const handleCartUpdate = () => updateCartLength();
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Order', path: '/order' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide text-gray-900 flex items-center"
        >
          <span className="text-orange-500">A</span>
          <span>mrit </span>
          <span className="text-orange-500">C</span>
          <span>are</span>
        </Link>

        {/* Center: Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                  : 'text-gray-700 hover:text-orange-500 transition-colors'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* Contact (Desktop Only) */}
          <div className="hidden md:flex items-center text-gray-600 text-sm">
            <FaPhoneAlt className="mr-2 text-orange-500" />
            <span>Call Us: (+91) 8709792019</span>
          </div>

          {/* Profile */}
          <NavLink
            to="/profile"
            className="hover:text-orange-500 transition-colors"
          >
            <FaUser className="text-xl" />
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative hover:text-orange-500 transition-colors"
          >
            <FaShoppingCart className="text-xl" />
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartLength}
              </span>
            )}
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full w-full left-0 py-4 px-6 z-40">
          <div className="flex flex-col space-y-4 text-lg font-medium">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500 transition-colors'
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Profile and Cart in Mobile */}
            <NavLink
              to="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              <FaUser className="inline mr-2" />
              Profile
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 transition-colors"
            >
              <FaShoppingCart className="inline mr-2" />
              Cart ({cartLength})
            </NavLink>
          </div>

          {/* Optional: Mobile Search */}
          <div className="mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="absolute right-2 top-2 text-orange-500">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
