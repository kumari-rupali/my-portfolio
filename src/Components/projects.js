import React from 'react';
import { motion } from 'framer-motion';
import "../styles/project.css";

const projects = [
  {
    title: 'Age Calculator',
    description: 'A web app that calculates age based on birth date input.',
    tech: ['React', 'JavaScript', 'CSS'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/age_calculator.png'
  },
  {
    title: 'Calculator',
    description: 'A simple calculator app with basic arithmetic functions.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/calculator.png'
  },
  {
    title: 'Naukri Profile',
    description: 'A system for managing job applications and profiles.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/naukri_profile.png'
  },
  {
    title: 'FreshKart ECommerce',
    description: 'An online marketplace for fresh produce.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/freshkart.png'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing skills and projects.',
    tech: ['ReactJS', 'Bootstrap', 'CSS'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/portfolio.png'
  },
  {
    title: 'Weather App',
    description: 'A personal portfolio showcasing skills and projects.',
    tech: ['ReactJS', 'Bootstrap', 'CSS'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: '/images/portfolio.png'
  },
];

const Projects = () => {  
  return (
    <motion.div
      className="projects-container"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="project-image">
              <img src={project.imgSrc} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
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
