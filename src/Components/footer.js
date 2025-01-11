import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/kumari-rupali" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaGithub size="2rem" />
            </motion.div>
          </a>
          <a href="https://www.linkedin.com/in/kumarirupali/" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaLinkedin size="2rem" />
            </motion.div>
          </a>
          <a href="mailto:kumarirupali992@gmail.com">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaEnvelope size="2rem" />
            </motion.div>
          </a>
        </div>

        <div className="contact-info">
          <p>Email: kumarirupali992@gmail.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Address: XYZ Street, Chennai, Tamil Nadu, India</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Kumari Rupali. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
