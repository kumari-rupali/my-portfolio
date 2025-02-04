import React from 'react';
import { motion } from 'framer-motion'; 
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <motion.div
          className="bio-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="bio-text">
            I am a passionate and dedicated Software Engineer with over a year of experience in full-stack development.
            I specialize in building scalable, intuitive web applications using modern frameworks like ReactJS and NodeJS.
          </p>
          <p className="bio-text">
            I completed my Bachelor's degree in Computer Science & Engineering (BE.CSE) from Aarupadai Veedu Institute of Technology,
            Chennai, Tamil Nadu.
          </p>
          <p className="bio-text">
            I craft dynamic web applications with clean, efficient, and user-friendly designs. Passionate about innovation and technology.
            Aspiring full stack web developer specializing in MERN Stack, eager to take on a challenging role in a forward-thinking company.
            Looking for growth opportunities to apply my skills and contribute to the organization's success.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
