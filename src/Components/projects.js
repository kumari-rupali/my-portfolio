import React from 'react';
import { motion } from 'framer-motion';
import "../styles/project.css";

const projects = [
  {
    title: 'Youtube Clone',
    description: 'A personal portfolio showcasing skills and projects.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',  
  },
  {
    title: 'FreshKart App',
    description: 'An online marketplace for fresh produce directly to the customers.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Naukri-Profile Clone',
    description: 'A system for managing job applications and profiles.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Weather App',
    description: 'A personal portfolio showcasing skills and projects.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',  
  }, 
  {
    title: 'TO-DO App',
    description: 'A simple calculator app with basic arithmetic functions.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Age Calculator',
    description: 'A web app that calculates age based on birth date input.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Calculator',
    description: 'A simple calculator app with basic arithmetic functions.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
  },
  {
    title: 'Code Editor',
    description: 'A personal portfolio showcasing skills and projects.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',  
  },
  {
    title: 'Banking System',
    description: 'A personal portfolio showcasing skills and projects.',
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',  
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
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
