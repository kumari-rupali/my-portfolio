import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import "../styles/project.css";

const projects = [
  {
    title: 'Job Drive',
    description: 'Job discovery and application-focused platform with a production deployment, designed to demonstrate modern React UI and practical job-search workflows.',
    tech: 'React • JavaScript • Modern UI • Vercel',
    githubLink: 'https://github.com/kumari-rupali/job-drive',
    liveLink: 'https://lify-job-drive.vercel.app',
  },
  {
    title: 'E-Commerce / Flipkart-style Store',
    description: 'Full-featured shopping experience with product discovery, cart, wishlist, authentication, orders and checkout flows.',
    tech: 'React • TypeScript • Firebase • Zustand • Tailwind CSS',
    githubLink: 'https://github.com/kumari-rupali/E-commerce',
    liveLink: 'https://saharika.vercel.app',
  },
  {
    title: 'Freshcart',
    description: 'Grocery e-commerce application focused on product browsing, categories, cart management and responsive shopping UX.',
    tech: 'React • JavaScript • REST APIs • Bootstrap',
    githubLink: 'https://github.com/kumari-rupali/Freshcart',
  },
  {
    title: 'Naukri Profile Clone',
    description: 'Job-profile interface inspired by Naukri, focused on professional information, skills, education and recruiter-friendly presentation.',
    tech: 'React • JavaScript • CSS • Bootstrap • Node.js • Express',
    githubLink: 'https://github.com/kumari-rupali/Naukri-Profile',
    liveLink: 'https://naukri-profile.vercel.app',
  },
  {
    title: 'Streaming App / YouTube Clone',
    description: 'Video-streaming style interface with content discovery, reusable components and responsive layouts.',
    tech: 'React • JavaScript • APIs • CSS',
    githubLink: 'https://github.com/kumari-rupali/Streaming-App',
    liveLink: 'https://qtube-streaming-app.vercel.app',
  },
  {
    title: 'Job Application Tracker',
    description: 'Dedicated job-tracking deployment for organizing applications and monitoring the progress of a job search.',
    tech: 'React • JavaScript • Frontend UI',
    liveLink: 'https://lify-job-tracker.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'Productivity application demonstrating task organization, CRUD interactions and a structured workflow UI.',
    tech: 'React • JavaScript • CSS',
    githubLink: 'https://github.com/kumari-rupali/Task-manager-App',
    liveLink: 'https://task-manager-tools.netlify.app',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather dashboard that consumes an external API and presents current conditions through a clean responsive interface.',
    tech: 'React • JavaScript • REST API • CSS',
    githubLink: 'https://github.com/kumari-rupali/weather-app',
    liveLink: 'https://current-weather-dash.netlify.app',
  },
  {
    title: 'Code Editor',
    description: 'Browser-based coding interface demonstrating an interactive editor UI and developer-focused frontend interactions.',
    tech: 'React • JavaScript • CSS',
    githubLink: 'https://github.com/kumari-rupali/Code-editor-with-codes',
  },
  {
    title: 'Team Collaboration Tool',
    description: 'Collaborative workspace concept for managing team tasks, communication and project progress.',
    tech: 'React • JavaScript • REST APIs',
    githubLink: 'https://github.com/kumari-rupali/Team-collaboration-Tool',
  },
  {
    title: 'Calculator App',
    description: 'Interactive calculator demonstrating clean UI composition, input handling and frontend state logic.',
    tech: 'React • JavaScript • CSS',
    githubLink: 'https://github.com/kumari-rupali/Calculator-App',
    liveLink: 'https://calculator025.netlify.app',
  },
  {
    title: 'Age Calculator',
    description: 'Utility application that calculates age from a selected date through a simple, responsive interface.',
    tech: 'JavaScript • HTML • CSS',
    githubLink: 'https://github.com/kumari-rupali/age-calculator-app-main',
    liveLink: 'https://age-checking.netlify.app',
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
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link"><Github size={16} /> GitHub</a>}
            {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link secondary"><ExternalLink size={16} /> Live Demo</a>}
          </div>
        </motion.article>
      ))}
    </div>
  </motion.div>
);

export default Projects;
