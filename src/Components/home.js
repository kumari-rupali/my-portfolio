import React from 'react';
import { motion } from 'framer-motion';
import Skills from './skills';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import "../index.css";
// import pic from "../image/my-profile-pic.jpg";

const Home = () => {
  return (
    <>
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
          <div className="content">
            {/* <img
              src={pic}
              alt="Kumari Rupali"
              className="profile-photo"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            /> */}
                          <h5>Hi, My name is </h5>
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            >
              Kumari Rupali
            </motion.h1>
            <h2>I am a Full Stack Developer</h2>
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
              I craft dynamic web applications with clean, efficient, and user-friendly designs. Passionate about innovation and technology.
              Aspiring full stack web developer specializing in MERN Stack, eager to take on a challenging role in a forward-thinking company.
              Looking for growth opportunities to apply my skills and contribute to the organization's success.
            </motion.p>

            <motion.div
              className="cta-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="hero-content">
                <div className="text-content">
                  <a href="https://drive.google.com/file/d/1jIRUUFz2eJZnqIUfqYCoShENUKxBz10O/view?usp=drive_link" className="cta" download>
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div >
      </motion.div >

      <motion.div
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <About />
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Projects />
      </motion.div>

      <motion.div
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
