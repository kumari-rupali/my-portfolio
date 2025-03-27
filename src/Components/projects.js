import React from 'react';
import { motion } from 'framer-motion';
import "../styles/project.css";

const projects = [
  {
    title: 'Youtube Clone',
    description: 'A full-featured YouTube UI clone with video playback support.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/youtube-clone',
  },
  {
    title: 'FreshKart App',
    description: 'An online marketplace for fresh produce.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/freshkart-app',
  },
  {
    title: 'Naukri-Profile Clone',
    description: 'A system for managing job applications and profiles.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/naukri-profile',
  },
  {
    title: 'Weather App',
    description: 'Get real-time weather updates using OpenWeather API.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/weather-app',
  },
  {
    title: 'TO-DO App',
    description: 'A simple task management application with CRUD features.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/todo-app',
  },
  {
    title: 'Age Calculator',
    description: 'Calculates age based on user-provided birthdate.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Calculator',
    description: 'A simple arithmetic calculator web application.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/calculator-app',
  },
  {
    title: 'Code Editor',
    description: 'A real-time online code editor supporting multiple languages.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/code-editor',
  },
  {
    title: 'Banking System',
    description: 'A digital banking solution with secure transactions.',
    liveLink: 'https://your-live-link.com',
    githubLink: 'https://github.com/username/banking-system',
  },
];

const Projects = () => {
  return (
    <motion.div
      className="project-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
