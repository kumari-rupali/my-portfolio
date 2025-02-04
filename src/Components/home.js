import React from 'react';
import { motion } from 'framer-motion';
import Skills from './skills';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import "../styles/home.css";
import pic from "../image/my-profile-pic.jpg";

const Home = () => {
  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="row container align-items-center">
          <div className="col-md-6 text-content">
            <h5 className="text-primary">Hi, My name is</h5>
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="display-4 fw-bold"
            >
              Kumari Rupali
            </motion.h1>
            <h2 className="text-secondary">I'm Full Stack Developer</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Front-end Developer | ReactJS | NodeJS | Web Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Building meaningful and delightful digital products.
            </motion.p>

            <motion.div
              className="cta-container mt-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a
                href="https://drive.google.com/file/d/1jIRUUFz2eJZnqIUfqYCoShENUKxBz10O/view?usp=drive_link"
                className="btn btn-primary btn-lg"
                download
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <img
              src={pic}
              alt="Kumari Rupali"
              className="img-fluid rounded-circle shadow-lg"
              style={{ width: '300px', height: '300px' }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <About />
      </motion.div>

      <motion.div
        className="projects-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="contact-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        className="contact-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default Home;
