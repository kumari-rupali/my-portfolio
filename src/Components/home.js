import React from 'react';
import { motion } from 'framer-motion';
import Skills from './skills';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import "../styles/home.css";
import pic from "../image/my-profile-pic.png";
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Home = () => (
  <main>
    <motion.section className="container home-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="row align-items-center">
        <motion.div className="col-md-7 text-section" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-primary hero-kicker">FRONTEND DEVELOPER · REACT.JS</p>
          <h1>Hi, I’m <span>Kumari Rupali</span>.</h1>
          <h2>I build clean, responsive web experiences.</h2>
          <p className="hero-copy">React.js developer with professional experience building user-focused interfaces, API integrations and reusable frontend components.</p>
          <div className="cta-container mt-4">
            <a href="/projects" className="btn btn-primary btn-sm">View My Work <ArrowUpRight size={16} /></a>
            <a href="/contact" className="btn btn-outline-light btn-sm">Let’s Connect</a>
          </div>
          <a className="resume-link" href="https://drive.google.com/file/d/1xk9WfZi3O1M7gqQeB5GClm73cXBTdg-L/view" target="_blank" rel="noopener noreferrer">View Resume <ArrowUpRight size={14} /></a>
        </motion.div>
        <motion.div className="col-md-5 image-section" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          <img src={pic} alt="Kumari Rupali" className="profile-pic" />
        </motion.div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section"><ArrowDown size={16} /> Scroll to explore</a>
    </motion.section>

    <section id="about" className="about-section"><h2>About Me</h2><About /></section>
    <section className="projects-section"><h2>Selected Projects</h2><Projects /></section>
    <section className="skills-section"><h2>Skills & Technologies</h2><Skills /></section>
    <section className="contact-section"><h2>Let’s Work Together</h2><Contact /></section>
  </main>
);

export default Home;
