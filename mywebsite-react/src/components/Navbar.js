import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="container nav card" aria-label="Primary">
        <NavLink to="/" className="brand">Your Name</NavLink>
        <div className="nav-links">
          <NavLink to="/about" className="chip">About</NavLink>
          <NavLink to="/projects" className="chip">Projects</NavLink>
          <NavLink to="/contact" className="chip">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
