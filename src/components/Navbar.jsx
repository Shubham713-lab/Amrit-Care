// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-brand">MedShip</NavLink>
        <div className="nav-links">
          <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Orders</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <NavLink to="/login" className="nav-link auth-link">Login / Signup</NavLink>
      </div>
    </nav>
  );
}