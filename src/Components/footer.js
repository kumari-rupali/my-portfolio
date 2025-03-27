import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="row">
          <div className="col-md-3 col-12">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-12 social-links">
            <div className="social-icons">
              <h5>Follow Me</h5>
              <a href="https://github.com/kumari-rupali" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaGithub size="1rem" />
                  Github
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/kumarirupali/" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaLinkedin size="1rem" />
                  LinkedIn
                </motion.div>
              </a>
              <a href="https://www.instagram.com/kumarirupali_143" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaInstagram size="1rem" />
                  Instagram
                </motion.div>
              </a>
              <a href="https://www.facebook.com/kumari.rupali.3726" target="_blank" rel="noreferrer">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FaFacebook size="1rem" />
                  Facebook
                </motion.div>
              </a>
            </div>
            <ul className="blogs">
              <h5>Blog</h5>
             <li> <a href='https://rupalinetwork.odoo.com/'>Odoo Blog</a></li>
             <li> <a href='https://mingletalks.blogspot.com/'>Blogger Blog</a></li>
             <li><a href='https://rkblog992.wordpress.com/'>Wordpress Blog</a></li>
            </ul>
            <ul className="code-links">
              <h5>Coding Profile</h5>
            <li>  <a href="https://leetcode.com/kumarirupali/" target="_blank" rel="noreferrer">LeetCode</a></li>
              <li><a href="https://leetcode.com/kumarirupali/" target="_blank" rel="noreferrer">GreekForGreeks</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-12 contact-info">
            <h5>Contact</h5>
            <p><a href="mailto:kumarirupali992@gmail.com"><FaEnvelope size='1rem'/> kumarirupali992@gmail.com</a></p>
            <p>Address: Chennai, Tamil Nadu, India</p>
            <p>Number: 7491XXXXXX</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Kumari Rupali. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
