import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../styles/contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', number: '', message: '' });
  };

  return (
    <motion.div
      className="contact-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h4>How to reach me?</h4>
      <p>
        Thank you for visiting my portfolio website! I'm actively searching for job opportunities.
        If you have any questions or would like to get in touch, please use the contact form below or
        send me an email directly at <a href="mailto:kumarirupali992@gmail.com">kumarirupali992@gmail.com</a>.
      </p>
      <h3>Contact me here!</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </motion.div>
  );
};

export default Contact;
