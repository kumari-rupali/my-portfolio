import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBriefcase, FaCertificate } from 'react-icons/fa';
import Certification from './certifications';
import Experience from './experience';
import '../styles/about.css';

const About = () => {
  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="bio-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <p className="bio-text">
          I am a passionate and dedicated <b>Software Engineer</b> with over a year of experience in full-stack development.
          I specialize in building scalable, intuitive web applications using modern frameworks like <b>ReactJS</b> and <b>NodeJS</b>.
        </p>
        <p className="bio-text">
          <FaLaptopCode className="icon" /> Graduated with a <b>BE in Computer Science</b> from <i>Aarupadai Veedu Institute of Technology, Chennai</i>.
        </p>
        <p className="bio-text">
          💡 Crafting dynamic, user-friendly applications. Aspiring <b>MERN Stack Developer</b>, seeking innovative roles in the tech industry.
        </p>
      </motion.div>

      <motion.div className="experience-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <h2><FaBriefcase className="icon" />Work Experience</h2>
        <Experience />
      </motion.div>

      <motion.div className="certification-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <h2><FaCertificate className="icon" />My Certifications</h2>
        <Certification />
      </motion.div>
    </motion.div>
  );
};

export default About;
