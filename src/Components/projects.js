import React from 'react';
import { motion } from 'framer-motion';
import "../styles/project.css";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const projects = [
  {
    title: 'Age Calculator',
    description: 'A web app that calculates age based on birth date input.',
    tech: ['React', 'JavaScript', 'CSS'],
    liveLink: 'https://age-checking.netlify.app/',
    githubLink: 'https://github.com/username/age-calculator',
    imgSrc: "src/image/Screenshot (11).png"
  },
  {
    title: 'Calculator',
    description: 'A system for account management and transactions.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: 'src/image/Screenshot(11).png'
  },
  {
    title: 'Naukri Profile',
    description: 'A system for account management and transactions.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: '/images/Screenshot_11.png'
  },
  {
    title: 'FreshKart ECommerce',
    description: 'A system for account management and transactions.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: '/images/Screenshot_11.png'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing skills and projects.',
    tech: ['ReactJS', 'Bootstrap', 'CSS'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: '/images/Screenshot_Portfolio.png'
  },
  {
    title: 'Basic Banking System',
    description: 'A system for account management and transactions.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: '/images/Screenshot_Banking.png'
  },
  {
    title: 'Online Code Editor',
    description: 'A seamless coding experience with diverse options.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://age-checking.netlify.app/',
    imgSrc: '/images/Screenshot_114007.png'
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`projects ${darkMode ? 'dark' : 'light'}`}>
    <motion.div
      className="projects-container"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.imgSrc} alt='img' />
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
    </div>
  );
};

export default Projects;
