import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Component } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/About":
      Component = About
      break
    case "/Projects":
      Component = Projects
      break
    case "/Contact":
      Component = Contact

      break
  }
  return (
    <div className="App">
      <header>
        <Navbar />
        <Component />
      </header>
    </div>
  );
}

export default App;
