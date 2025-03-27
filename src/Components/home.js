import React from 'react';
import { motion } from 'framer-motion';
import Skills from './skills';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import "../styles/home.css";
import pic from "../image/my-profile-pic.png";
import { FaUserGraduate, FaCode, FaPhoneAlt, FaLaptopCode } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <motion.div 
        className="container home-section" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <div className="row align-items-center">
          <motion.div 
            className="col-md-6 text-section"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h5 className="text-primary">Hi, My name is</h5>
            <motion.h1 
              initial={{ y: 100 }} 
              animate={{ y: 0 }} 
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="fw-bold"
            >
              Kumari Rupali
            </motion.h1>
            <h2 className="text-secondary">Full Stack Developer</h2>
            <p>Front-end Developer | ReactJS | NodeJS | Web Enthusiast</p>
            <p>Building meaningful and delightful digital products.</p>

            <motion.div
              className="cta-container mt-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="https://drive.google.com/file/d/1xk9WfZi3O1M7gqQeB5GClm73cXBTdg-L/view?usp=drive_link"
                className="btn btn-light btn-sm"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="col-md-6 image-section"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <img src={pic} alt="Kumari Rupali" className="profile-pic" />
          </motion.div>

        </div>
      </motion.div>

      <motion.div className="about-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
      <h2><FaUserGraduate className="icon" /> About Me</h2>
      <About />
      </motion.div>

            <motion.div className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
              <h2><FaLaptopCode className="icon" /> Projects</h2>
              <Projects />
            </motion.div>

      <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
        <h2><FaCode className="icon" /> Skills & Technologies</h2>
        <Skills />
      </motion.div>

      <motion.div className="contact-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
        <h2><FaPhoneAlt className="icon" /> Contact Me</h2>
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
