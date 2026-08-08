import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Mail, ArrowUpRight } from "lucide-react";
import "../styles/footer.css";

const Footer = () => (
  <footer className="footer">
    <motion.div className="container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="row">
        <div className="col-md-5 col-12">
          <h3>Kumari Rupali</h3>
          <p>Frontend Developer focused on React.js, responsive interfaces and thoughtful user experiences.</p>
          <a className="footer-email" href="mailto:kumarirupali992@gmail.com"><Mail size={16} /> kumarirupali992@gmail.com</a>
        </div>
        <div className="col-md-3 col-12">
          <h5>Explore</h5>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-12 social-links">
          <h5>Connect</h5>
          <div className="social-icons">
            <a href="https://github.com/kumari-rupali" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/kumarirupali/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/kumarirupali_143" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/kumari.rupali.3726" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
          <a className="footer-resume" href="https://drive.google.com/file/d/1xk9WfZi3O1M7gqQeB5GClm73cXBTdg-L/view" target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="text-center mt-4"><p className="copyright">© {new Date().getFullYear()} Kumari Rupali. Built with React.</p></div>
    </motion.div>
  </footer>
);

export default Footer;
