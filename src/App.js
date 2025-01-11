import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './Components/home'
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import About from './Components/about';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Experience from './Components/experience';
import Certifications from './Components/certifications';
import Contact from './Components/contact';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
