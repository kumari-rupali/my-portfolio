import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './Components/home'
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import About from './Components/about';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/contact';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
      <Footer />
    </Router>
  );
};

export default App;
