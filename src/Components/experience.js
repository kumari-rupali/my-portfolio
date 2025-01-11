import React from 'react';
import { motion } from 'framer-motion';
import "../styles/experience.css";

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kaay Labs',
    duration: 'Sep 2023 - Present',
    description: 'Worked on full-stack projects, enhancing user experiences by building scalable and efficient web applications using React and Node.js.',
  },
  {
    role: 'React Developer Intern',
    company: 'Kaay Labs',
    duration: 'May 2023 - Sep 2023',
    description: 'Developed a Naukri profile application and a calculator tool as part of internship projects.',
  },
];

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
