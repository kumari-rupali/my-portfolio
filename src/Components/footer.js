import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
          <a href="https://www.instagram.com/kumarirupali_143?utm_source=qr&igsh=MTQ0am1rYTB3c242dQ==" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaInstagram size="2rem" />
            </motion.div>
          </a>
          <a href="https://www.facebook.com/kumari.rupali.3726" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.2 }}>
              <FaFacebook size="2rem" />
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
          <p>Address: Thiruporur, Chennai, Tamil Nadu, India</p>
        </div>
        <p>&copy; {new Date().getFullYear()} Kumari Rupali. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
