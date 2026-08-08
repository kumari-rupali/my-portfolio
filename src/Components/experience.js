import React from 'react';
import { motion } from 'framer-motion';
import "../styles/experience.css";

const experiences = [
  {
    company: 'Kaay Labs Pvt. Ltd.',
    role: 'Associate Software Engineer',
    duration: 'Sep 2023 – Aug 2024',
    description: [
      'Built and maintained responsive web interfaces using React.js, JavaScript, HTML5 and CSS3.',
      'Integrated REST APIs and collaborated with cross-functional teams to deliver production features.',
      'Worked with reusable components, debugging, Git workflows and performance-focused UI improvements.'
    ]
  },
  {
    company: 'Kaay Labs Pvt. Ltd.',
    role: 'React.js Developer Intern',
    duration: 'May 2023 – Sep 2023',
    description: [
      'Developed React-based interfaces and reusable UI components during internship projects.',
      'Worked on a Naukri-style profile application and interactive utility applications.'
    ]
  },
];

const Experience = () => (
  <motion.div
    className="experience"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
  >
    <div className="experience-list">
      {experiences.map((exp) => (
        <motion.article key={`${exp.role}-${exp.duration}`} className="experience-card" whileHover={{ y: -4 }}>
          <p className="duration">{exp.duration}</p>
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <ul className="description">
            {exp.description.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </motion.article>
      ))}
    </div>
  </motion.div>
);

export default Experience;
