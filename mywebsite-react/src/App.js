import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 */}
          <Route path="*" element={<div className="container"><h2>Not found</h2></div>} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Your Name</small>
        </div>
      </footer>
    </div>
  );
}
