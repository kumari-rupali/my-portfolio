import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import "../styles/project.css";

const projects = [
  {
    title: 'E-Commerce / Flipkart Clone',
    description: 'Responsive shopping experience with product discovery, cart, wishlist, authentication, orders and checkout flows.',
    tech: 'React • TypeScript • Firebase • Zustand • Tailwind CSS',
    githubLink: 'https://github.com/kumari-rupali/E-commerce',
  },
  {
    title: 'Freshcart',
    description: 'Modern grocery e-commerce application focused on product browsing, categories, cart management and responsive UX.',
    tech: 'React • JavaScript • REST APIs • Bootstrap',
    githubLink: 'https://github.com/kumari-rupali/Freshcart',
  },
  {
    title: 'Naukri Profile Clone',
    description: 'Job-profile interface designed around professional information, skills, education and recruiter-friendly presentation.',
    tech: 'React • JavaScript • CSS • Bootstrap',
    githubLink: 'https://github.com/kumari-rupali/Naukri-Profile',
  },
  {
    title: 'Streaming App / YouTube Clone',
    description: 'Video-streaming style interface with reusable UI components, content discovery and responsive layouts.',
    tech: 'React • JavaScript • APIs • CSS',
    githubLink: 'https://github.com/kumari-rupali/Streaming-App',
  },
  {
    title: 'Task Management App',
    description: 'Productivity application demonstrating task organization, CRUD interactions and a structured workflow UI.',
    tech: 'React • JavaScript • CSS',
    githubLink: 'https://github.com/kumari-rupali/Task-manager-App',
  },
  {
    title: 'Team Collaboration Tool',
    description: 'Collaborative workspace concept for managing team tasks, communication and project progress.',
    tech: 'React • JavaScript • REST APIs',
    githubLink: 'https://github.com/kumari-rupali/Team-collaboration-Tool',
  },
  {
    title: 'Weather App',
    description: 'Weather dashboard that consumes an external API and presents current conditions through a clean responsive interface.',
    tech: 'React • JavaScript • REST API • CSS',
    githubLink: 'https://github.com/kumari-rupali/weather-app',
  },
  {
    title: 'Code Editor',
    description: 'Browser-based coding interface demonstrating interactive editor UI and developer-focused frontend interactions.',
    tech: 'React • JavaScript • CSS',
    githubLink: 'https://github.com/kumari-rupali/Code-editor-with-codes',
  },
];

const Projects = () => (
  <motion.div className="project-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6 }}>
    <div className="project-list">
      {projects.map((project, index) => (
        <motion.article key={project.title} className="project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ y: -6 }}>
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-tech">{project.tech}</p>
          <div className="project-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link"><Github size={16} /> GitHub</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link secondary"><ExternalLink size={16} /> Repository</a>
          </div>
        </motion.article>
      ))}
    </div>
  </motion.div>
);

export default Projects;
